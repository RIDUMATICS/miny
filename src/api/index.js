const express = require('express');
const { nanoid } = require('nanoid');
const dotenv = require('dotenv');
const Pusher = require('pusher');
const Miny = require('../model/miny.js');
const { schema, slugSchema } = require('../util/validation.js');

const router = express.Router();

dotenv.config();

const pusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  encrypted: true,
  cluster: process.env.PUSHER_CLUSTER
});

// get all url details
router.get('/urls', async (req, res, next) => {
  try {
    const urls = await Miny.find();
    const total_urls = urls.length;
    let total_hits = 0;
    let today_urls = 0;
    urls.forEach((url) => {
      const now = new Date();
      const createdDate = new Date(url.createdOn);
      total_hits += url.hit;
      if (now.toDateString() === createdDate.toDateString()) {
        today_urls += 1;
      }
    });
    res.json({ total_urls, total_hits, today_urls });
  } catch (error) {
    next(error);
  }
});

// Create a short url
router.post('/url', async (req, res) => {
  try {
    let { slug } = req.body;
    const { url } = req.body;
    await schema.validate({
      slug,
      url,
    });
    if (!slug) {
      slug = nanoid(5);
    }

    const minyUrl = await Miny.findOne({ slug: slug.toLowerCase() });

    if (minyUrl) {
      const err = new Error('Opps!, Your Selected custom slug is duplicated');
      res.status(409).json({ message: err.message, status: 409 });
    } else {
      const miny = new Miny({
        slug: slug.trim().toLowerCase(),
        url: url.trim(),
        minyUrl: `miny.herokuapp.com/${slug.trim()}`,
      });

      await pusher.trigger('miny', 'update_details', {});
      const value = await miny.save();

      res.status(201).json({ data: value, message: 'URL minified successfully', status: 201 });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      error.status = 400;
    }
    res.status(error.status || 500).json({ message: error.message, status: error.status });
  }
});

// GET short url dateils by Slug
router.get('/url/:slug', async (req, res, next) => {
  try {
    const slug = req.params.slug.trim();
    await slugSchema.validate({ slug });
    const minyURL = await Miny.findOne({ slug });
    if (!minyURL) {
      const err = new Error('Opps!, Slug you entered is not found');
      res.send(404).json({ message: err.message, status: 404 });
    }
    res.status(200).json({ message: 'Yess!, Slug is found', status: 200, data: minyURL });
  } catch (error) {
    next(error);
  }
});

// Redirect to url
router.get('/:slug', async (req, res, next) => {
  try {
    const slug = req.params.slug.trim();
    await slugSchema.validate({ slug });
    const minyUrl = await Miny.findOne({ slug });
    if (minyUrl) {
      minyUrl.lastVisit = new Date();
      minyUrl.hit += 1;

      await pusher.trigger('miny', 'update_details', {});
      await minyUrl.save();
      res.redirect(minyUrl.url);
    }
    next(); // pass to vue router (404 page)
  } catch (error) {
    next(error);
  }
});

module.exports = router;

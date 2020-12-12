import express from 'express';
import { nanoid } from 'nanoid';
import Miny from '../model/miny.js';
import { schema, slugSchema } from '../util/validation';

const router = express.Router();

// Create a short url
router.post('/url', async (req, res, next) => {
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

    const minyUrl = await Miny.findOne({ slug });

    if (minyUrl) {
      const err = new Error('Opps!, Your Selected custom slug is duplicated');
      res.status(409).json({ message: err.message, status: 409 });
    } else {
      const miny = new Miny({
        slug: slug.trim(),
        url: url.trim()
      });

      const value = await miny.save();
      res.status(201).json({ data: value, message: 'URL minified successfully', status: 201 });
    }
  } catch (error) {
    next(error);
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

export default router;

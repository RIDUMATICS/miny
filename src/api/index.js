import express from 'express';
import { nanoid } from 'nanoid';
import yup from 'yup';
import Miny from '../model/miny.js';

const router = express.Router();
const schema = yup.object().shape({
  slug: yup.string().trim().matches(/^[a-zA-Z0-9_-]*$/i, {
    message: 'slug consisting only of non-whitespaces use _ or -'
  }),
  url: yup.string().trim().url()
});

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

export default router;

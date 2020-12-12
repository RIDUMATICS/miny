import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middlewares.js';
import api from './api/index.js';
import Miny from './model/miny.js';
import { slugSchema } from './util/validation.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Redirect to url
app.get('/:slug', async (req, res, next) => {
  try {
    const slug = req.params.slug.trim();
    await slugSchema.validate({ slug });
    const minyURL = await Miny.findOne({ slug });
    if (!minyURL) {
      // TODO redirect to 404 page
    }
    res.redirect(minyURL.url);
  } catch (error) {
    next(error);
  }
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;

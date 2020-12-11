import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middlewares.js';
import api from './api/index.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/:id', (req, res) => {
  res.send('hooo');
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;

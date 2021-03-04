const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const history = require('connect-history-api-fallback');
const api = require('./api/index.js');

dotenv.config();

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, 'dist/'));

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/', api);
app.use(history());
app.use(staticFileMiddleware);
app.use(history());

module.exports = app;

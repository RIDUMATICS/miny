/* eslint-disable no-console */
const mongoose = require('mongoose');
const app = require('./app.js');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 5000;

mongoose.connection.on('error', console.error.bind(console, 'database connection error:'));

mongoose.connection.once('open', () => app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
}));

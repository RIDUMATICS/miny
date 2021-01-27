const mongoose = require('mongoose');

const minySchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  hit: {
    type: Number,
    default: 0
  },
  lastVisit: {
    type: Date,
  },
  minyUrl: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  }
});

module.exports = mongoose.model('urls', minySchema);

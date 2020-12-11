import mongoose from 'mongoose';

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
  createdOn: {
    type: Date,
    default: new Date(),
  }
});

export default mongoose.model('urls', minySchema);

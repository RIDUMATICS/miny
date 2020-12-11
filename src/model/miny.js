import mongoose, { Schema } from 'mongoose';

const minySchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    maxlength: 5,
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

export default mongoose.model('miny', minySchema);

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
    },
    genre: {
      type: [String],
      required: [true, 'Genre is required'],
    },
    plot: {
      type: String,
      required: [true, 'Plot is required'],
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    releaseYear: {
      type: Number,
    },
    director: {
      type: String,
    },
    cast: {
      type: [String],
    },
    keywords: {
      type: [String],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);

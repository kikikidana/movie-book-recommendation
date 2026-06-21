const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
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
      max: 5,
      default: 0,
    },
    publishYear: {
      type: Number,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    isbn: {
      type: String,
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

module.exports = mongoose.model('Book', bookSchema);

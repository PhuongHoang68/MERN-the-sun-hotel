//import dependencies
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    reviewText: {
      type: String,
      minlength: 1,
    },
    reviewStars: {
      type: Number,
      min: 0,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;
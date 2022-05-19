const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const likeSchema = new Schema(
  {
    like: {
      type: Number,
      required: true,
      maxlength: 500
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = likeSchema;
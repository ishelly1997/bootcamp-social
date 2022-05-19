const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');
const likeSchema = require ('./Like');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    likes: [likeSchema] 
  },
  {
    toJSON: {
      getters: true
    }
  }
);


postSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
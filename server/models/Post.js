const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

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
    reactions: [likeSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('LikeCount').get(function() {
  return this.likes.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
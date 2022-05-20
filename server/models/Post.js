const { Schema, model, default: mongoose } = require('mongoose');

const dateFormat = require('../utils/dateFormat');
/* //const likeSchema = //require('./Like'); */

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
    likes: [{
      value: {
        type: Number,
        default: 1
      },
      liker: {
        type: mongoose.schema.types.ObjectId,
        ref: 'User'
      }
    }]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('likeCount').get(() => {
  return this.likes.length
})

postSchema.methods.like = function (liker) {
  if (!this.likes.includes({
    liker: liker
  })) {
    this.likes.push({ liker: liker })
    return this.save();
  }

};

const Post = model('Post', postSchema);

module.exports = Post;
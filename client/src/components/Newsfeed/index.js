//newsfeed 
import React from 'react';

const postList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              {post.username}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <p>{post.postText}</p>
              <p className="mb-0">
                Likes: {post.likeCount} || Click to{' '}
                {post.likeCount} 
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default postList;
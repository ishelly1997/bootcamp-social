import React from "react";

const Network = ( ) => {
    const username = user.username;
    const posts = user.posts;
    return (
        <div>
        <h3>{username}</h3>
        {posts}
      </div>
    );
};

export default Network;
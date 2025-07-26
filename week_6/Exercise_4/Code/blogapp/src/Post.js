// src/Post.js
import React from 'react';

const Post = ({ title, body }) => (
  <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

export default Post;

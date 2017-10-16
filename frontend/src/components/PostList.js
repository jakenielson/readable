import React from 'react';
import PostPreview from './PostPreview';

export default function PostList ({ posts }) {
  return (
    <ul className='post-list'>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

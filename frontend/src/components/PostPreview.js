import React from 'react';

export default function PostPreview ({ post }) {
  return (
    <div className="post-preview container">
      <div className="row">
        <div className="col-2">
          <i className="fa fa-arrow-up"></i>
          <p>{ post.voteScore }</p>
          <i className="fa fa-arrow-down"></i>
        </div>
        <div className="col-10">
          <h3>{post.title}</h3>
        </div>
      </div>
    </div>
  );
}

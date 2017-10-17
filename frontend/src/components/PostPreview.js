import React from 'react';

export default function PostPreview ({ post }) {
  return (
    <div className="post-preview media m-2">
      <div className="d-flex flex-column m-3">
        <i className="fa fa-arrow-up"></i>
        <span className="text-center">{ post.voteScore }</span>
        <i className="fa fa-arrow-down"></i>
      </div>
      <div className="media-body m-3">
        <h3>{ post.title }</h3>
      </div>
    </div>
  );
}

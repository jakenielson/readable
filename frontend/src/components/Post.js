import React from 'react';

export default function Post ({ post }) {
  return (
    <div className="post">
      <div className="post-header media m-2">
        <div className="d-flex flex-column m-3">
          <i className="fa fa-arrow-up"></i>
          <span className="text-center">{ post.voteScore }</span>
          <i className="fa fa-arrow-down"></i>
        </div>
        <div className="media-body m-3">
          <h3>{ post.title }</h3>
        </div>
      </div>

      <div className="post-body m-2">
        <p>{ post.body }</p>
      </div>
    </div>
  );
}

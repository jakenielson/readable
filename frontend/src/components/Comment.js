import React from 'react';

export default function Comment ({ comment }) {
  return (
    <div className="post-preview media m-2">
      <div className="d-flex flex-column m-3">
        <i className="fa fa-arrow-up"></i>
        <span className="text-center">{ comment.voteScore }</span>
        <i className="fa fa-arrow-down"></i>
      </div>
      <div className="media-body m-3">
        <p>{ comment.body }</p>
      </div>
    </div>
  );
}

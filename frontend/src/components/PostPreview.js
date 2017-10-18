import React from 'react';
import { Link } from 'react-router-dom';

export default function PostPreview ({ post, selectPost }) {
  return (
    <div className="post-preview media m-2">
      <div className="d-flex flex-column m-3">
        <i className="fa fa-arrow-up"></i>
        <span className="text-center">{ post.voteScore }</span>
        <i className="fa fa-arrow-down"></i>
      </div>
      <div className="media-body m-3">
        <Link to={`/post/${ post.id }`} onClick={ () => { selectPost(post.id) } }><h3>{ post.title }</h3></Link>
      </div>
    </div>
  );
}

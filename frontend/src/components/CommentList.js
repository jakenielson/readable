import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    const ids = Object.keys(comments);

    return (
      <ul className='post-list'>
        {ids && ids.map((id) => (
          <li key={id}>
            <Comment comment={ comments[id] } />
          </li>
        ))}
      </ul>
    );
  }
}
export default CommentList;

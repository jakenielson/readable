import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    const ids = Object.keys(comments);

    return (
      <ul className='post-list'>
        {ids && ids.map((id) => (
          <li key={id}>
            <Comment id={ comments[id].id } />
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    comments: state.commentList
  }
}

export default connect(mapStateToProps)(CommentList);

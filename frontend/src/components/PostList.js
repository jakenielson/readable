import React, { Component } from 'react';
import PostPreview from './PostPreview';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { selectPost, clearComments, addComment } from '../actions';

class PostList extends Component {
  selectPost = (id) => {
    this.props.dispatch(selectPost({ id }));
    this.props.dispatch(clearComments());
    api.getComments(id).then(res => {
      res.forEach(comment => {
        this.props.dispatch(addComment(comment));
      })
    });
  }

  render() {
    const { posts } = this.props;
    const ids = Object.keys(posts).filter(key => !posts[key].deleted);

    return (
      <ul className='post-list'>
        {ids && ids.map((id) => (
          <li key={id}>
            <PostPreview id={ id } selectPost={this.selectPost}/>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    posts: state.postList
  }
}

export default connect(mapStateToProps)(PostList);

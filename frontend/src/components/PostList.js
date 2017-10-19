import React, { Component } from 'react';
import PostPreview from './PostPreview';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    const ids = Object.keys(posts);

    return (
      <ul className='post-list'>
        {ids && ids.map((id) => (
          <li key={id}>
            <PostPreview id={ id } selectPost={this.props.selectPost}/>
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

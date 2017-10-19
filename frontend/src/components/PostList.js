import React, { Component } from 'react';
import PostPreview from './PostPreview';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    const ids = Object.keys(posts);

    return (
      <ul className='post-list'>
        {ids && ids.map((id) => (
          <li key={id}>
            <PostPreview post={ posts[id] } selectPost={this.props.selectPost}/>
          </li>
        ))}
      </ul>
    );
  }
}
export default PostList;

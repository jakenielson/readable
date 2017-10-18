import React, { Component } from 'react';
import PostPreview from './PostPreview';

class PostList extends Component {
  //Tracks the filtered list of posts, but only by ID
  state = {
    postIds: []
  }

  //Filter posts on mount
  componentWillMount = () => {
    let postIds = [];

    if (this.props.category === "all") {
      postIds = Object.keys(this.props.posts);
    }
    else {
      postIds = Object.keys(this.props.posts).filter(post => this.props.posts[post].category === this.props.category);
    }

    this.setState({postIds: postIds});
  }

  //Filter posts on update
  componentWillReceiveProps = (nextProps) => {
    let postIds = [];

    if (nextProps.category === "all") {
      postIds = Object.keys(nextProps.posts);
    }
    else {
      postIds = Object.keys(nextProps.posts).filter(post => nextProps.posts[post].category === nextProps.category);
    }

    this.setState({postIds: postIds});
  }

  render() {
    const { posts } = this.props;
    const { postIds } = this.state;

    return (
      <ul className='post-list'>
        {postIds.map((postId) => (
          <li key={postId}>
            <PostPreview post={ posts[postId] } />
          </li>
        ))}
      </ul>
    );
  }
}
export default PostList;

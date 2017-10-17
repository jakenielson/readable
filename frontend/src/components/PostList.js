import React, { Component } from 'react';
import PostPreview from './PostPreview';

class PostList extends Component {
  state = {
    posts: []
  }

  //Filter posts on mount
  componentWillMount = () => {
    if (this.props.category === "all") {
      this.setState({posts: this.props.posts});
    }
    else {
      const posts = this.props.posts.filter(post => post.category === this.props.category);
      this.setState({posts: posts});
    }
  }

  //Filter posts on update
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.category === 'all') {
      this.setState({posts: nextProps.posts});
    }
    else {
      const posts = nextProps.posts.filter(post => post.category === nextProps.category);
      this.setState({posts: posts});
    }
  }

  render() {
    const { posts } = this.state;

    console.log('Posts', posts);

    return (
      <ul className='post-list'>
        {posts.map((post) => (
          <li key={post.id}>
            <PostPreview post={post} />
          </li>
        ))}
      </ul>
    );
  }
}
export default PostList;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { addPost } from '../actions';
import PostList from './PostList';

class App extends Component {
  // Get initial posts and comments
  componentDidMount = () => {
    api.getPosts().then(res => {
      res.forEach(post => {
        this.props.dispatch(addPost(post));
      });
    });
  }

  render() {
    return (
      <PostList posts={this.props.posts} />
    );
  }
}

function mapStateToProps (state) {
  var posts = [];
  var comments = [];

  for (var post in state.posts) {
    posts.push(state.posts[post]);
  }

  for (var comment in state.comments) {
    comments.push(state.comments[comment]);
  }

  return {
    posts: posts,
    comments: comments
  }
}

export default connect(mapStateToProps)(App);

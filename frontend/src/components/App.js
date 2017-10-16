import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from '../utils/api';
import { addPost } from '../actions';
import PostList from './PostList';
import PageHeader from './PageHeader';

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
      <BrowserRouter>
        <div className="app">
          <Route path="/react" render={() => (
            <div>
              <PageHeader name="React" />
              <PostList posts={this.props.posts} />
            </div>
          )}/>
          <Route path="/redux" render={() => (
            <div>
              <PageHeader name="Redux" />
              <PostList posts={this.props.posts} />
            </div>
          )}/>
          <Route exact path="/" render={() => (
            <div>
              <PageHeader name="Readable" />
              <PostList posts={this.props.posts} />
            </div>
          )}/>
        </div>
      </BrowserRouter>
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

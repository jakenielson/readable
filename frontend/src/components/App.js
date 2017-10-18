import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from '../utils/api';
import { addPost } from '../actions';
import PostList from './PostList';
import PageHeader from './PageHeader';
import Post from './Post';

class App extends Component {
  state = {
    selectedPost: ''
  }

  selectPost = (post) => {
    this.setState({ selectedPost: post });
  }

  // Get initial posts and comments
  componentWillMount = () => {
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
          <Route path="/post" render={() => (
            <div>
              <PageHeader name="Readable" />
              <Post post={this.props.posts[this.state.selectedPost]}/>
            </div>
          )}/>
          <Route path="/react" render={() => (
            <div>
              <PageHeader name="React" />
              <PostList category="react" posts={this.props.posts} selectPost={this.selectPost}/>
            </div>
          )}/>
          <Route path="/redux" render={() => (
            <div>
              <PageHeader name="Redux" />
              <PostList category="redux" posts={this.props.posts} selectPost={this.selectPost}/>
            </div>
          )}/>
          <Route exact path="/" render={() => (
            <div>
              <PageHeader name="Readable" />
              <PostList category="all" posts={this.props.posts} selectPost={this.selectPost}/>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(App);

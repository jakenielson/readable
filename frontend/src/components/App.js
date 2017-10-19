import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from '../utils/api';
import { addPost, selectCategory, clearPosts } from '../actions';
import PostList from './PostList';
import PageHeader from './PageHeader';
import Post from './Post';
import CommentList from './CommentList';

class App extends Component {
  showAllPosts = () => {
    this.props.dispatch(selectCategory('all'));
    this.props.dispatch(clearPosts());
    api.getPosts().then(res => {
      res.forEach(post => {
        this.props.dispatch(addPost(post));
      });
    });
  }

  componentWillMount = () => {
    this.showAllPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/post" render={() => (
            <div>
              <PageHeader showAllPosts={this.showAllPosts} />
              <Post />
              <CommentList />
            </div>
          )}/>
          <Route exact path="/" render={() => (
            <div>
              <PageHeader showAllPosts={this.showAllPosts} />
              <PostList />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps (state) {
  return {
    postList: state.postList,
    commentList: state.commentList,
    activePost: state.activePost,
    activeCategory: state.activeCategory
  }
}

export default connect(mapStateToProps)(App);

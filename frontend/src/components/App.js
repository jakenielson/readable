import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from '../utils/api';
import { addPost, selectCategory, clearPosts, selectPost } from '../actions';
import PostList from './PostList';
import PageHeader from './PageHeader';
import Post from './Post';

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

  changeCategory = (category) => {
    this.props.dispatch(selectCategory(category));
    this.props.dispatch(clearPosts());
    api.getPostsInCategory(category).then(res => {
      res.forEach(post => {
        this.props.dispatch(addPost(post));
      });
    });
  }

  selectPost = (id) => {
    this.props.dispatch(selectPost({ id }));
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
              <PageHeader showAllPosts={this.showAllPosts} changeCategory={this.changeCategory} name="Readable" />
              <Post post={this.props.postList[this.props.activePost.id]}/>
            </div>
          )}/>
          <Route path="/react" render={() => (
            <div>
              <PageHeader showAllPosts={this.showAllPosts} changeCategory={this.changeCategory} name="React" />
              <PostList posts={this.props.postList} selectPost={this.selectPost}/>
            </div>
          )}/>
          <Route path="/redux" render={() => (
            <div>
              <PageHeader showAllPosts={this.showAllPosts} changeCategory={this.changeCategory} name="Redux" />
              <PostList posts={this.props.postList} selectPost={this.selectPost}/>
            </div>
          )}/>
          <Route exact path="/" render={() => (
            <div>
              <PageHeader showAllPosts={this.showAllPosts} changeCategory={this.changeCategory} name="Readable" />
              <PostList posts={this.props.postList} selectPost={this.selectPost}/>
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

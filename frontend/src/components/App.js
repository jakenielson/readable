import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from '../utils/api';
import { addPost, selectCategory, clearPosts, upNumOfComments } from '../actions';
import PostList from './PostList';
import PageHeader from './PageHeader';
import Post from './Post';

class App extends Component {
  showAllPosts = () => {
    this.props.dispatch(selectCategory('all'));
    this.props.dispatch(clearPosts());
    api.getPosts().then(res => {
      res.forEach(post => {
        post.numOfComments = 0;
        this.props.dispatch(addPost(post));
      });
    }).then(() => { this.initNumOfComments() });
  }

  initNumOfComments = () => {
    let ids = Object.keys(this.props.postList).filter(key => !this.props.postList[key].deleted);

    ids.forEach(id => {
      if (this.props.postList[id].numOfComments === 0) {
        api.getComments(id).then(res => {
          res.forEach(comment => {
            this.props.dispatch(upNumOfComments({ id }));
          })
        })
      }
    })
  }

  componentWillMount = () => {
    this.showAllPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <PageHeader showAllPosts={this.showAllPosts} initNumOfComments={this.initNumOfComments}/>

          <Route path="/:category/:id" component={Post}/>

          <Route exact path="/:category" component={PostList}/>

          <Route exact path="/" component={PostList}/>
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

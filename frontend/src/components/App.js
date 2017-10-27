import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from '../utils/api';
import { addPost, selectCategory, clearPosts, upNumOfComments } from '../actions';
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
        post.numOfComments = 0;
        this.props.dispatch(addPost(post));
      });
    }).then(res => {
      this.initNumOfComments();
    });
  }

  initNumOfComments = () => {
    this.props.ids.forEach(id => {
      if (this.props.postList[id].numOfComments === 0) {
        const currentID = id;
        api.getComments(currentID).then(res => {
          res.forEach(comment => {
            this.props.dispatch(upNumOfComments({ id: currentID }));
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
          <Route path="/:category/:id" render={() => (
            <div>
              <PageHeader showAllPosts={this.showAllPosts} />
              <Post />
              <CommentList />
            </div>
          )}/>
          <Route exact path="/:category" render={() => (
            <div>
              <PageHeader showAllPosts={this.showAllPosts} />
              <PostList />
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
  let ids = Object.keys(state.postList).filter(key => !state.postList[key].deleted);

  switch (state.sortMethod.method) {
    case 'top':
      ids = ids.sort((a, b) => state.postList[b].voteScore - state.postList[a].voteScore);
      break;
    case 'new':
      ids = ids.sort((a, b) => state.postList[b].timestamp - state.postList[a].timestamp);
      break;
    default:
      break;
  }

  return {
    postList: state.postList,
    commentList: state.commentList,
    activePost: state.activePost,
    activeCategory: state.activeCategory,
    ids: ids
  }
}

export default connect(mapStateToProps)(App);

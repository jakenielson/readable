import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import PageHeader from './PageHeader';
import * as api from '../utils/api';
import { addPost, clearPosts, upNumOfComments } from '../actions';

class PostListPage extends Component {
  showAllPosts = () => {
    this.props.dispatch(clearPosts());

    if (this.props.match.params.category) {
      api.getPostsInCategory(this.props.match.params.category).then(res => {
        res.forEach(post => {
          post.numOfComments = 0;
          this.props.dispatch(addPost(post));
        });
      }).then(res => {
        this.initNumOfComments();
      })
    }

    else {
      api.getPosts().then(res => {
        res.forEach(post => {
          post.numOfComments = 0;
          this.props.dispatch(addPost(post));
        });
      }).then(() => { this.initNumOfComments() });
    }
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

  componentDidUpdate = (prevProps) => {
    if(this.props.match.url !== prevProps.match.url) {
      this.showAllPosts();
    }
  }

  render() {
    return (
      <div className="postListPage">
        <PageHeader category={this.props.match.params.category}/>
        <PostList />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    postList: state.postList
  }
}

export default connect(mapStateToProps)(PostListPage);

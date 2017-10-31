import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import PageHeader from './PageHeader';
import * as api from '../utils/api';
import { addPost, clearPosts, upNumOfComments, clearComments, addComment, selectPost } from '../actions';

class PostDetailsPage extends Component {
  loadPosts = () => {
    this.props.dispatch(clearPosts());

    api.getPostsInCategory(this.props.match.params.category).then(res => {
      res.forEach(post => {
        post.numOfComments = 0;
        this.props.dispatch(addPost(post));
      });
    }).then(res => {
      this.initNumOfComments();
    })
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

  loadComments = () => {
    const id = this.props.match.params.id;
    this.props.dispatch(selectPost({ id }));
    this.props.dispatch(clearComments());

    api.getComments(id).then(res => {
      res.forEach(comment => {
        this.props.dispatch(addComment(comment));
      })
    });
  }

  componentWillMount = () => {
    this.loadPosts();
    this.loadComments();
  }

  render() {
    return (
      <div className="postDetailsPage">
        <PageHeader />
        <Post/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    postList: state.postList
  }
}

export default connect(mapStateToProps)(PostDetailsPage);

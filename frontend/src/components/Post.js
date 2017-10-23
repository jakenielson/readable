import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { upVotePost, downVotePost, deletePost } from '../actions';
import * as api from '../utils/api';

class Post extends Component {
  upvote = () => {
    api.upVotePost(this.props.post.id);
    this.props.dispatch(upVotePost(this.props.post));
  }

  downvote = () => {
    api.downVotePost(this.props.post.id);
    this.props.dispatch(downVotePost(this.props.post));
  }

  delete = () => {
    api.deletePost(this.props.post.id);
    this.props.dispatch(deletePost(this.props.post));
  }

  render() {
    const { post } = this.props;
    return(
      <div className="post">
        <div className="post-header media m-2">
          <div className="d-flex flex-column m-3">
            <button onClick={this.upvote}><i className="fa fa-arrow-up"></i></button>
            <span className="text-center">{ post.voteScore }</span>
            <button onClick={this.downvote}><i className="fa fa-arrow-down"></i></button>
          </div>
          <div className="media-body m-3">
            <h3>{ post.title }</h3>
            <Link to={`/`} onClick={this.delete}>Delete</Link>
          </div>
        </div>

        <div className="post-body m-2">
          <p>{ post.body }</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    post: state.postList[state.activePost.id]
  }
}

export default connect(mapStateToProps)(Post);

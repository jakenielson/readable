import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { upVotePost, downVotePost, deletePost } from '../actions/posts';
import * as api from '../utils/api';

class PostPreview extends Component {
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
    const date = new Date(post.timestamp).toDateString();

    return (
      <div className="card mx-3 my-2 bg-secondary">
        <div className="post-preview card-body media m-2 py-0">
          <div className="d-flex flex-column m-3">
            <button onClick={this.upvote} className="btn btn-sm btn-dark"><i className="fa fa-arrow-up"></i></button>
            <span className="text-center text-dark font-weight-bold my-1">{ post.voteScore }</span>
            <button onClick={this.downvote} className="btn btn-sm btn-dark"><i className="fa fa-arrow-down"></i></button>
          </div>
          <div className="media-body d-flex flex-column justify-content-between align-items-start m-3">
            <Link to={`/${ post.category }/${ post.id }`}><h4 className="red-hover text-dark font-weight-bold">{ post.title }</h4></Link>
            <p className="text-dark small my-0">submitted {date} by {post.author} to {post.category}</p>
            <p className="text-dark small my-0">{post.numOfComments} comments</p>
            <button className="btn btn-sm btn-danger mt-2" onClick={this.delete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: state.postList[ownProps.id]
  }
}

export default connect(mapStateToProps)(PostPreview);

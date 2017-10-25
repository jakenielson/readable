import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVoteComment, downVoteComment, deleteComment } from '../actions';
import * as api from '../utils/api';

class Comment extends Component {
  upvote = () => {
    api.upVoteComment(this.props.comment.id);
    this.props.dispatch(upVoteComment(this.props.comment));
  }

  downvote = () => {
    api.downVoteComment(this.props.comment.id);
    this.props.dispatch(downVoteComment(this.props.comment));
  }

  delete = () => {
    api.deleteComment(this.props.comment.id);
    this.props.dispatch(deleteComment(this.props.comment));
  }

  render() {
    const { comment, open } = this.props;

    return (
      <div className="card bg-secondary mx-3 my-2">
        <div className="post-preview card-body media m-2 py-0">
          <div className="d-flex flex-column m-3">
            <button onClick={this.upvote} className="btn btn-sm btn-dark"><i className="fa fa-arrow-up"></i></button>
            <span className="text-center text-dark font-weight-bold my-1">{ comment.voteScore }</span>
            <button onClick={this.downvote} className="btn btn-sm btn-dark"><i className="fa fa-arrow-down"></i></button>
          </div>
          <div className="media-body d-flex flex-column justify-content-between align-items-start m-3">
            <p className="text-dark font-weight-bold">{ comment.body }</p>
            <span className="text-dark small">submitted {comment.timestamp} ago by {comment.author}</span>
            <div className="btn-group mt-2">
              <button className="btn btn-sm btn-danger" onClick={this.delete}>Delete</button>
              <button className="btn btn-sm btn-dark" onClick={ () => { open(comment.id, comment.body) } } data-toggle="modal" data-target="#editCommentModal">Edit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    comment: state.commentList[ownProps.id]
  }
}

export default connect(mapStateToProps)(Comment);

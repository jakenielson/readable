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
      <div className="post-preview media m-2">
        <div className="d-flex flex-column m-3">
          <button onClick={this.upvote}><i className="fa fa-arrow-up"></i></button>
          <span className="text-center">{ comment.voteScore }</span>
          <button onClick={this.downvote}><i className="fa fa-arrow-down"></i></button>
        </div>
        <div className="media-body m-3">
          <p>{ comment.body }</p>
          <button onClick={this.delete}>Delete</button>
          <button onClick={ () => { open(comment.id, comment.body) } } data-toggle="modal" data-target="#editCommentModal">Edit</button>
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

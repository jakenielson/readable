import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { upVotePost, downVotePost, deletePost } from '../actions';
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
    const { post, selectPost } = this.props;

    return (
      <div className="post-preview media m-2">
        <div className="d-flex flex-column m-3">
          <button onClick={this.upvote}><i className="fa fa-arrow-up"></i></button>
          <span className="text-center">{ post.voteScore }</span>
          <button onClick={this.downvote}><i className="fa fa-arrow-down"></i></button>
        </div>
        <div className="media-body m-3">
          <Link to={`/post/${ post.id }`} onClick={ () => { selectPost(post.id) } }><h3>{ post.title }</h3></Link>
          <button onClick={this.delete}>Delete</button>
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

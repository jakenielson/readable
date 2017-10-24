import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { upVotePost, downVotePost, deletePost, editPost } from '../actions';
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

  edit = () => {
    const title = document.querySelector("#edit-post-title").value;
    const body = document.querySelector("#edit-post-body").value;

    api.editPost(this.props.post.id, title, body);
    this.props.dispatch(editPost({...this.props.post, title, body}));
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
            <button data-toggle="modal" data-target="#editPostModal">Edit</button>
          </div>
        </div>

        <div className="post-body m-2">
          <p>{ post.body }</p>
        </div>

        <div className="modal" id="editPostModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Post</h5>
                <button className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <textarea id="edit-post-title" rows="2" className="form-control" defaultValue={post.title}></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea id="edit-post-body" rows="5" className="form-control" defaultValue={post.body}></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={this.edit} data-dismiss="modal">Submit</button>
                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
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

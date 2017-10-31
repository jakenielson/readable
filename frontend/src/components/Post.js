import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { upVotePost, downVotePost, deletePost, editPost } from '../actions/posts';
import * as api from '../utils/api';
import CommentList from './CommentList';

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

    if ( post ) {
      const date = new Date(post.timestamp).toDateString();

      return(
        <div className="post">
          <div className="post-header card bg-secondary mx-3 my-2">
            <div className="card-body media m-2 py-0">
              <div className="d-flex flex-column m-3">
                <button onClick={this.upvote} className="btn btn-sm btn-dark"><i className="fa fa-arrow-up"></i></button>
                <span className="text-center text-dark font-weight-bold my-1">{ post.voteScore }</span>
                <button onClick={this.downvote} className="btn btn-sm btn-dark"><i className="fa fa-arrow-down"></i></button>
              </div>
              <div className="media-body d-flex flex-column justify-content-between align-items-start m-3">
                <h4 className="text-dark font-weight-bold">{ post.title }</h4>
                <p className="text-dark small my-0">submitted {date} by {post.author} to {post.category}</p>
                <p className="text-dark small my-0">{post.numOfComments} comments</p>
                <div className="btn-group mt-2">
                  <Link className="btn btn-danger btn-sm" to={`/`} onClick={this.delete}>Delete</Link>
                  <button className="btn btn-dark btn-sm" data-toggle="modal" data-target="#editPostModal">Edit</button>
                </div>
              </div>
            </div>
            <div className="post-body card bg-dark mx-3 my-2">
              <div className="card-body media m-2 py-0">
                <p className="text-light">{ post.body }</p>
              </div>
            </div>
          </div>

          <div className="modal" id="editPostModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-dark">
                  <h5 className="modal-title text-light">Edit Post</h5>
                  <button className="close text-light" data-dismiss="modal">&times;</button>
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
                  <button className="btn btn-dark" onClick={this.edit} data-dismiss="modal">Submit</button>
                  <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <CommentList />
        </div>
      )
    }

    else {
      return(
        <h3 className="text-warning m-3">NO POST</h3>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    post: state.postList[state.activePost.id]
  }
}

export default connect(mapStateToProps)(Post);

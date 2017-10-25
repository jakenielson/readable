import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { editComment, addComment } from '../actions';

class CommentList extends Component {
  state = {
    id: ''
  }

  open = (id, body) => {
    document.querySelector("#edit-comment-body").value = body;
    this.setState({ id });
  }

  edit = () => {
    const d = new Date();
    const id = this.state.id;
    const timestamp = d.getTime();
    const body = document.querySelector("#edit-comment-body").value;

    api.editComment(id, timestamp, body);
    this.props.dispatch(editComment({id, timestamp, body}));
  }

  add = () => {
    const id = Math.floor( Math.random() * ( Math.floor(999999) - Math.max(100000) ) ) + Math.max(100000);
    const d = new Date();
    const timestamp = d.getTime();
    const body = document.querySelector("#add-comment-body").value;
    const author = document.querySelector("#add-comment-author").value;
    const parentId = this.props.activePost.id;
    const voteScore = 1;
    const deleted = false;
    const parentDeleted = false;

    api.addComment(id, timestamp, body, author, parentId);
    this.props.dispatch(addComment({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }));
  }

  render() {
    const { comments } = this.props;
    const ids = Object.keys(comments).filter(key => !comments[key].deleted);

    return (
      <div className="ml-5">
        <button data-toggle="modal" data-target="#addCommentModal" className='btn btn-danger btn-sm'>Add Comment</button>
        <ul className='post-list ml-1'>
          {ids && ids.map((id) => (
            <li key={id}>
              <Comment id={ comments[id].id } open={this.open} />
            </li>
          ))}
        </ul>

        <div className="modal" id="addCommentModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-light">Add Comment</h5>
                <button className="close text-light" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <textarea id="add-comment-author" rows="1" className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea id="add-comment-body" rows="5" className="form-control"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-dark" onClick={this.add} data-dismiss="modal">Submit</button>
                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="editCommentModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-light">Edit Comment</h5>
                <button className="close text-light" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea id="edit-comment-body" rows="5" className="form-control"></textarea>
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
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    comments: state.commentList,
    activePost: state.activePost
  }
}

export default connect(mapStateToProps)(CommentList);

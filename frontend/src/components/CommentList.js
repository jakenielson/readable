import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { editComment } from '../actions';

class CommentList extends Component {
  state = {
    id: ''
  }

  open = (id, body) => {
    document.querySelector("#input-comment-body").value = body;
    this.setState({ id });
  }

  edit = () => {
    const d = new Date();
    const id = this.state.id;
    const timestamp = d.getTime();
    const body = document.querySelector("#input-comment-body").value;

    api.editComment(id, timestamp, body);
    this.props.dispatch(editComment({id, timestamp, body}));
  }

  render() {
    const { comments } = this.props;
    const ids = Object.keys(comments).filter(key => !comments[key].deleted);

    return (
      <div>
        <ul className='post-list'>
          {ids && ids.map((id) => (
            <li key={id}>
              <Comment id={ comments[id].id } open={this.open} />
            </li>
          ))}
        </ul>

        <div className="modal" id="editCommentModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Comment</h5>
                <button className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea id="input-comment-body" rows="5" className="form-control"></textarea>
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
    );
  }
}

function mapStateToProps (state) {
  return {
    comments: state.commentList
  }
}

export default connect(mapStateToProps)(CommentList);

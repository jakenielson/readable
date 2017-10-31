import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { addPost } from '../actions/posts';

class PageHeader extends Component {
  addPost = () => {
    let id = Math.floor( Math.random() * ( Math.floor(999999) - Math.max(100000) ) ) + Math.max(100000);
    id = id.toString();
    const d = new Date();
    const timestamp = d.getTime();
    const title = document.querySelector("#add-post-title").value;
    const body = document.querySelector("#add-post-body").value;
    const author = document.querySelector("#add-post-author").value;
    const category = document.querySelector("#add-post-category").value;
    const voteScore = 1;
    const deleted = false;
    const numOfComments = 0;

    api.addPost(id, timestamp, title, body, author, category);
    this.props.dispatch(addPost({ id, timestamp, title, body, author, category, voteScore, deleted, numOfComments }));
  }

  render() {
    const { category } = this.props;
    const name = category || 'readable';

    return(
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-danger">
          <div className="container">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand text-dark font-weight-bold">{ name }</Link>
            <button data-toggle="modal" data-target="#addPostModal" className="btn btn-sm btn-dark">New Post</button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/react" className="nav-link text-light">react</Link>
                </li>
                <li className="nav-item">
                  <Link to="/redux" className="nav-link text-light">redux</Link>
                </li>
                <li className="nav-item">
                  <Link to="/udacity" className="nav-link text-light">udacity</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="modal" id="addPostModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-light">New Post</h5>
                <button className="close text-light" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select className="form-control" name="category" id="add-post-category">
                      <option value="react">react</option>
                      <option value="redux">redux</option>
                      <option value="udacity">udacity</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <textarea id="add-post-author" rows="1" className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <textarea id="add-post-title" rows="2" className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea id="add-post-body" rows="5" className="form-control"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-dark" onClick={this.addPost} data-dismiss="modal">Submit</button>
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
  }
}

export default connect(mapStateToProps)(PageHeader);

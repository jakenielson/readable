import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import PageHeader from './PageHeader';
import { clearPosts, fetchPostsInCategory } from '../actions/posts';
import { clearComments, fetchComments } from '../actions/comments';
import { selectPost } from '../actions/select';

class PostDetailsPage extends Component {
  loadPosts = () => {
    this.props.dispatch(clearPosts());
    this.props.dispatch(fetchPostsInCategory(this.props.match.params.category))
  }

  loadComments = () => {
    const id = this.props.match.params.id;
    this.props.dispatch(selectPost({ id }));
    this.props.dispatch(clearComments());
    this.props.dispatch(fetchComments(id));
  }

  componentWillMount = () => {
    this.loadPosts();
    this.loadComments();
  }

  render() {
    return (
      <div className="postDetailsPage">
        <PageHeader />
        <Post/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    postList: state.postList
  }
}

export default connect(mapStateToProps)(PostDetailsPage);

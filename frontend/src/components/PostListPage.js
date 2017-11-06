import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import PageHeader from './PageHeader';
import { clearPosts, fetchAllPosts, fetchPostsInCategory } from '../actions/posts';

class PostListPage extends Component {
  showAllPosts = () => {
    this.props.dispatch(clearPosts());

    if (this.props.match.params.category) {
      this.props.dispatch(fetchPostsInCategory(this.props.match.params.category))
    }
    else {
      this.props.dispatch(fetchAllPosts());
    }
  }

  componentWillMount = () => {
    this.showAllPosts();
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.match.url !== prevProps.match.url) {
      this.showAllPosts();
    }
  }

  render() {
    return (
      <div className="postListPage">
        <PageHeader category={this.props.match.params.category}/>
        <PostList />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    postList: state.postList
  }
}

export default connect(mapStateToProps)(PostListPage);

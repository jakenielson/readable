import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import PageHeader from './PageHeader';

class PostDetailsPage extends Component {
  render() {
    return (
      <div className="postDetailsPage">
        <PageHeader />
        <Post />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(PostDetailsPage);

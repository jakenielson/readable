import React, { Component } from 'react';
import PostPreview from './PostPreview';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { selectPost, clearComments, addComment, sortTop, sortNew } from '../actions';

class PostList extends Component {
  selectPost = (id) => {
    this.props.dispatch(selectPost({ id }));
    this.props.dispatch(clearComments());
    api.getComments(id).then(res => {
      res.forEach(comment => {
        this.props.dispatch(addComment(comment));
      })
    });
  }

  sort = (method) => {
    switch(method) {
      case 'top':
        this.props.dispatch(sortTop());
        break;
      case 'new':
        this.props.dispatch(sortNew());
        break;
      default:
        break;
    }
  }

  render() {
    const { ids } = this.props;

    return (
      <div>
        <span className="sort text-light small ml-3 mb-1">sort by: <a className="red-hover" onClick={ () => this.sort('top')}>top</a> <a className="red-hover" onClick={ () => this.sort('new')}>new</a></span>
        <ul className='post-list'>
          {ids && ids.map((id) => (
            <li key={id}>
              <PostPreview id={ id } selectPost={this.selectPost}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  let ids = Object.keys(state.postList).filter(key => !state.postList[key].deleted);

  switch (state.sortMethod.method) {
    case 'top':
      ids = ids.sort((a, b) => state.postList[b].voteScore - state.postList[a].voteScore);
      break;
    case 'new':
      ids = ids.sort((a, b) => state.postList[b].timestamp - state.postList[a].timestamp);
      break;
    default:
      break;
  }

  return {
    ids: ids
  }
}

export default connect(mapStateToProps)(PostList);

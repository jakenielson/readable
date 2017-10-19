import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { addPost, selectCategory, clearPosts } from '../actions';

class PageHeader extends Component {
  changeCategory = (category) => {
    this.props.dispatch(selectCategory({ category }));
    this.props.dispatch(clearPosts());
    api.getPostsInCategory(category).then(res => {
      res.forEach(post => {
        this.props.dispatch(addPost(post));
      });
    });
  }

  render() {
    const { showAllPosts, activeCategory } = this.props;
    const name = activeCategory.category || 'readable';

    return(
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" onClick={ () => { showAllPosts() } } className="navbar-brand">{ name }</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" onClick={ () => { this.changeCategory('react') } } className="nav-link">react</Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={ () => { this.changeCategory('redux') } } className="nav-link">redux</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeCategory: state.activeCategory
  }
}

export default connect(mapStateToProps)(PageHeader);

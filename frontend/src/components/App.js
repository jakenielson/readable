import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListPage from './PostListPage';
import PostDetailsPage from './PostDetailsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">

          <Route path="/:category/:id" component={PostDetailsPage}/>

          <Route exact path="/:category" component={PostListPage}/>

          <Route exact path="/" component={PostListPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(App);

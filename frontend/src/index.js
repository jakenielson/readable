import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// API Request Test - Delete Later
fetch(
  `http://localhost:3001/posts`,
  {
    headers: { 'Authorization': 'jake-nielson'}
  }
).then(
  response => response.json())
.then(
  response => console.log(response)
)

registerServiceWorker();

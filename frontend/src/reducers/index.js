import { combineReducers } from 'redux';

import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions';

function posts (state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      const { id, timestamp, title, body, author, category } = action;
      return {
        ...state,
        [id]: {
          id,
          timestamp,
          title,
          body,
          author,
          category,
          voteScore: 0,
          deleted: false
        }
      }
    case EDIT_POST:
      return state;
    case DELETE_POST:
      return state;
    case UPVOTE_POST:
      return state;
    case DOWNVOTE_POST:
      return state;
    default:
      return state;
  }
}

function comments (state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state;
    case EDIT_COMMENT:
      return state;
    case DELETE_COMMENT:
      return state;
    case UPVOTE_COMMENT:
      return state;
    case DOWNVOTE_COMMENT:
      return state;
    default:
      return state;
  }
}

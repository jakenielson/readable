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
  const { id, title, body } = action;

  switch (action.type) {
    case ADD_POST:
      const { timestamp, author, category } = action;

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
      return {
        ...state,
        [id]: {
          ...state[id],
          title,
          body
        }
      }
    case DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      }
    case UPVOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore + 1,
        }
      }
    case DOWNVOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore - 1
        }
      }
    default:
      return state;
  }
}

function comments (state = {}, action) {
  const { id, body } = action;

  switch (action.type) {
    case ADD_COMMENT:
      const { parentId, timestamp, author } = action;

      return {
        ...state,
        [id]: {
          id,
          parentId,
          timestamp,
          body,
          author,
          voteScore: 0,
          deleted: false,
          parentDeleted: false
        }
      }
    case EDIT_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          body
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      }
    case UPVOTE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore + 1
        }
      }
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore - 1
        }
      }
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  comments
});

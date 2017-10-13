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
      const { id, title, body } = action;

      return {
        ...state,
        [id]: {
          ...state[id]
          title,
          body
        }
      }
    case DELETE_POST:
      const { id } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      }
    case UPVOTE_POST:
      const { id } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore + 1,
        }
      }
    case DOWNVOTE_POST:
      const { id } = action;

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
  switch (action.type) {
    case ADD_COMMENT:
      const { id, parentId, timestamp, body, author } = action;

      return {
        ...state,
        [id]: {
          id,
          parentId,
          timestap,
          body,
          author,
          voteScore: 0,
          deleted: false,
          parentDeleted: false
        }
      }
    case EDIT_COMMENT:
      const { id, body } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          body
        }
      }
    case DELETE_COMMENT:
      const { id } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      }
    case UPVOTE_COMMENT:
      const { id } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore + 1
        }
      }
    case DOWNVOTE_COMMENT:
      const { id } = action;

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

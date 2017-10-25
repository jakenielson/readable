import { combineReducers } from 'redux';

import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CLEAR_POSTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  CLEAR_COMMENTS,
  SELECT_CATEGORY,
  SELECT_POST,
  SORT_TOP,
  SORT_NEW
} from '../actions';

function postList (state = {}, action) {
  const { id, title, body } = action;

  switch (action.type) {
    case ADD_POST:
      const { timestamp, author, category, voteScore, deleted } = action;

      return {
        ...state,
        [id]: {
          id,
          timestamp,
          title,
          body,
          author,
          category,
          voteScore,
          deleted
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
    case CLEAR_POSTS:
      return {}
    default:
      return state;
  }
}

function commentList (state = {}, action) {
  const { id, body } = action;

  switch (action.type) {
    case ADD_COMMENT:
      const { parentId, timestamp, author, voteScore, deleted, parentDeleted } = action;

      return {
        ...state,
        [id]: {
          id,
          parentId,
          timestamp,
          body,
          author,
          voteScore,
          deleted,
          parentDeleted
        }
      }
    case EDIT_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          timestamp,
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
    case CLEAR_COMMENTS:
      return {}
    default:
      return state;
  }
}

function activeCategory (state = { category: 'all' }, action) {
  const { category } = action;

  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        category
      }
    default:
      return state;
  }
}

function activePost (state = {}, action) {
  const { id } = action;

  switch (action.type) {
    case SELECT_POST:
      return {
        ...state,
        id
      }
    default:
      return state;
  }
}

function sortMethod (state = {method: 'top'}, action) {
  switch (action.type) {
    case SORT_TOP:
      return {
        method: 'top'
      }
    case SORT_NEW:
      return {
        method: 'new'
      }
    default:
      return state;
  }
}

export default combineReducers({
  postList,
  commentList,
  activeCategory,
  activePost,
  sortMethod
});

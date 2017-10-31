import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  CLEAR_COMMENTS
} from '../actions/types';

export default function commentList (state = {}, action) {
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

import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CLEAR_POSTS,
  UP_NUM_OF_COMMENTS,
  DOWN_NUM_OF_COMMENTS
} from '../actions/types';

export default function postList (state = {}, action) {
  const { id, title, body } = action;

  switch (action.type) {
    case ADD_POST:
      const { timestamp, author, category, voteScore, deleted, numOfComments } = action;

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
          deleted,
          numOfComments
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
    case UP_NUM_OF_COMMENTS:
      return {
        ...state,
        [id]: {
          ...state[id],
          numOfComments: state[id].numOfComments + 1
        }
      }
    case DOWN_NUM_OF_COMMENTS:
      return {
        ...state,
        [id]: {
          ...state[id],
          numOfComments: state[id].numOfComments - 1
        }
      }
    default:
      return state;
  }
}

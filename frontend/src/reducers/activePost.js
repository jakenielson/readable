import { SELECT_POST } from '../actions/types';

export default function activePost (state = {}, action) {
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

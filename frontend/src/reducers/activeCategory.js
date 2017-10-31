import { SELECT_CATEGORY } from '../actions/types';

export default function activeCategory (state = { category: 'all' }, action) {
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

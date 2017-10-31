import {
  SORT_TOP,
  SORT_NEW
} from '../actions/types';

export default function sortMethod (state = {method: 'top'}, action) {
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

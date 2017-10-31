import {
  SELECT_CATEGORY,
  SELECT_POST
} from './types';

export function selectCategory ({ category }) {
  return {
    type: SELECT_CATEGORY,
    category
  }
}

export function selectPost ({ id }) {
  return {
    type: SELECT_POST,
    id
  }
}

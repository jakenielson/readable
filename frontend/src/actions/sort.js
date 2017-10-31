import {
  SORT_TOP,
  SORT_NEW
} from './types';

export function sortTop () {
  return {
    type: SORT_TOP
  }
}

export function sortNew () {
  return {
    type: SORT_NEW
  }
}

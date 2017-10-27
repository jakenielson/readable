import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CLEAR_POSTS,
  UP_NUM_OF_COMMENTS,
  DOWN_NUM_OF_COMMENTS,
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
} from './types';

export function addPost ({ id, timestamp, title, body, author, category, voteScore, deleted, numOfComments }) {
  return {
    type: ADD_POST,
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

export function editPost ({ id, title, body }) {
  return {
    type: EDIT_POST,
    id,
    title,
    body
  }
}

export function deletePost ({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}

export function upVotePost ({ id }) {
  return {
    type: UPVOTE_POST,
    id
  }
}

export function downVotePost ({ id }) {
  return {
    type: DOWNVOTE_POST,
    id
  }
}

export function clearPosts () {
  return {
    type: CLEAR_POSTS
  }
}

export function upNumOfComments ({ id }) {
  return {
    type: UP_NUM_OF_COMMENTS,
    id
  }
}

export function downNumOfComments ({ id }) {
  return {
    type: DOWN_NUM_OF_COMMENTS,
    id
  }
}

export function addComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: ADD_COMMENT,
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

export function editComment ({ id, timestamp, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    timestamp,
    body
  }
}

export function deleteComment ({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function upVoteComment ({ id }) {
  return {
    type: UPVOTE_COMMENT,
    id
  }
}

export function downVoteComment ({ id }) {
  return {
    type: DOWNVOTE_COMMENT,
    id
  }
}

export function clearComments () {
  return {
    type: CLEAR_COMMENTS
  }
}

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

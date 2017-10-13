export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export function addPost ({ id, timestamp, title, body, author, category }) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
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

export function addComment ({ id, parentId, timestamp, body, author }) {
  return {
    type: ADD_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author
  }
}

export function editComment ({ id, body }) {
  return {
    type: EDIT_COMMENT,
    id,
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
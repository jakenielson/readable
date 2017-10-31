import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  CLEAR_COMMENTS
} from './types';

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

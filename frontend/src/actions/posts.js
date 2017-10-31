import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CLEAR_POSTS,
  UP_NUM_OF_COMMENTS,
  DOWN_NUM_OF_COMMENTS
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

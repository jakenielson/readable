const api = "http://localhost:3001";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'jnielson'
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostsInCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const upVotePost = (id) =>
  fetch(`${api}/posts/${id}`, { method: "POST", headers, body: JSON.stringify({ option: 'upVote' }) })
    .then(res => res.json())
    .then(data => data)

export const downVotePost = (id) =>
  fetch(`${api}/posts/${id}`, { method: "POST", headers, body: JSON.stringify({ option: 'downVote' }) })
    .then(res => res.json())
    .then(data => data)

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

export const downVotePost = (id) =>
  fetch(`${api}/posts/${id}`, { method: "POST", headers, body: JSON.stringify({ option: 'downVote' }) })

export const upVoteComment = (id) =>
  fetch(`${api}/comments/${id}`, { method: "POST", headers, body: JSON.stringify({ option: 'upVote' }) })

export const downVoteComment = (id) =>
  fetch(`${api}/comments/${id}`, { method: "POST", headers, body: JSON.stringify({ option: 'downVote' }) })

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, { method: "DELETE", headers })

const api = "http://localhost:5001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories
// USAGE: 
//   Get all of the categories available for the app. List is found in categories.js.
//   Feel free to extend this list as you desire.
export const getCategories = () =>
fetch(`${api}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories);

// GET /:category/posts
// USAGE:
//   Get all of the posts for a particular category
export const getCategoryPosts = (category) =>
fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

// GET /posts
// USAGE:
//   Get all of the posts. Useful for the main page when no category is selected.
export const getPosts = () =>
fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

// POST /posts
// USAGE:
//   Add a new post
// PARAMS: 
//   id - UUID should be fine, but any unique id will work
//   timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//   title - String
//   body - String
//   author - String
//   category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export const createPost = (body) =>
fetch(`${api}/posts`, {
  method: 'POST',
  headers,
  body: JSON.stringify(body)
}).then(res => res.json());

// GET /posts/:id
// USAGE:
//   Get the details of a single post
export const getPost = (id) =>
fetch(`${api}/posts/${id}`, { headers })
  .then(res => res.json())
  .then(data => data)

// POST /posts/:id
// USAGE:
//   Used for voting on a post
// PARAMS:
//   option - String: Either "upVote" or "downVote"
export const castPostVote = (option) => (id) =>
fetch(`${api}/posts/${id}`, {
  method: 'POST',
  headers,
  body: JSON.stringify({option})
}).then(res => res.json());

// PUT /posts/:id
// USAGE:
//   Edit the details of an existing post
// PARAMS:
//   title - String
//   body - String
export const updatePost = (title, body) => (id) =>
fetch(`${api}/posts/${id}`, {
  method: 'PUT',
  headers,
  body: JSON.stringify({
    title,
    body
  })
});

// DELETE /posts/:id
// USAGE:
//   Sets the deleted flag for a post to 'true'. 
//   Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (id) =>
fetch(`${api}/posts/${id}`, {
  method: 'DELETE',
  headers
})

// GET /posts/:id/comments
// USAGE:
//   Get all the comments for a single post
export const getComments = (id) =>
fetch(`${api}/posts/${id}/comments`, { headers })
  .then(res => res.json())
  .then(data => data);

// POST /comments
// USAGE:
//   Add a comment to a post
// PARAMS:
//   id: Any unique ID. As with posts, UUID is probably the best here.
//   timestamp: timestamp. Get this however you want.
//   body: String
//   author: String
//   parentId: Should match a post id in the database.
export const createComment = (timestamp, body, author, parentId) =>
fetch(`${api}/comments`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    id: 'something',
    timestamp, 
    body, 
    author, 
    parentId
  })
}).then(res => res.json());

// GET /comments/:id
// USAGE:
//   Get the details for a single comment
export const getComment = (id) =>
fetch(`${api}/comments/${id}`, { headers })
  .then(res => res.json())
  .then(data => data);

// POST /comments/:id
// USAGE:
//   Used for voting on a comment.
export const castCommentVote = (option) => (id) =>
fetch(`${api}/comments/${id}`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ option })
});

// PUT /comments/:id
// USAGE:
//   Edit the details of an existing comment
// PARAMS:
//   timestamp: timestamp. Get this however you want.
//   body: String
export const updateComment = (timestamp, body) => (id) =>
fetch(`${api}/comments/${id}`, {
  method: 'PUT',
  headers,
  body: JSON.stringify({
    timestamp, 
    body
  })
});

// DELETE /comments/:id
// USAGE:
//   Sets a comment's deleted flag to 'true'
export const deleteComment = (id) =>
fetch(`${api}/comments/${id}`, {
  method: 'DELETE', 
  headers 
}).then(res => res.json())
  .then(data => data.contact);

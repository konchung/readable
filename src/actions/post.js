// CREATE_POST, CREATE_POST_SUCCESS, GET_ALL_POST, GET_CATEGORY_POST, UPDATE_POST, UPDATE_POST_SUCCESS

import * as API from '../utils/api';
import * as Comment from './comment';

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const GET_POST = 'GET_POST'
export const CLEAR_POST = 'CLEAR_POST'

export const getPosts = post => ({
    type: GET_ALL_POSTS,
    post
})

export const getCategoryPosts = post => ({
    type: GET_CATEGORY_POSTS,
    post
})

export const getPost = post => ({
    type: GET_POST,
    post
})

export const clearPost = () => ({
    type: CLEAR_POST
})

export const fetchPosts = () => dispatch => (
    API
        .getPosts()
        .then(post => dispatch(getPosts(post)))
        .then(data => data.post.map(p =>
            dispatch(Comment.fetchComments(p.id))
        ))
);

export const fetchCategoryPosts = (id) => dispatch => (
    API
        .getCategoryPosts(id)
        .then(post => dispatch(getCategoryPosts(post)))
        .then(data => data.post.map(p =>
            dispatch(Comment.fetchComments(p.id))
        ))
);

export const fetchPost = (id) => dispatch => (
    API
        .getPost(id)
        .then(post => dispatch(getPost([post])))
        .then(data => data.post.map(p =>
            dispatch(Comment.fetchComments(p.id))
        ))
);
import * as ActionTypes from './actionTypes'
import * as API from '../utils/api';
import * as Comment from './comment';

export const getPosts = post => ({
    type: ActionTypes.GET_ALL_POSTS,
    post
})

export const getCategoryPosts = post => ({
    type: ActionTypes.GET_CATEGORY_POSTS,
    post
})

export const getPost = post => ({
    type: ActionTypes.GET_POST,
    post
})

export const clearPost = () => ({
    type: ActionTypes.CLEAR_POST
})

export const fetchPosts = () => dispatch => (
    API
        .getPosts()
        .then(post => dispatch(getPosts(post)))
);

export const fetchCategoryPosts = (id) => dispatch => (
    API
        .getCategoryPosts(id)
        .then(post => dispatch(getCategoryPosts(post)))
);

export const fetchPost = (id) => dispatch => (
    API
        .getPost(id)
        .then(post => dispatch(getPost([post])))
);
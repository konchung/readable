// CREATE_COMMENT, CREATE_COMMENT_SUCCESS, GET_ALL_COMMENTS, UPDATE_COMMENT, UPDATE_COMMENT_SUCCESS

import * as API from '../utils/api';

// GET_ALL_CATEGORIES
export const GET_COMMENTS = 'GET_COMMENTS'

export const getComments = (post_id, comment) => ({
    type: GET_COMMENTS,
    post_id,
    comment
})

export const fetchComments = (id) => dispatch => (
    API
        .getComments(id)
        .then(comment => dispatch(getComments(id, comment)))
);
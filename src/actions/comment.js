import * as ActionTypes from './actionTypes'
import * as API from '../utils/api';

export const getComments = (post_id, comment) => ({
    type: ActionTypes.GET_COMMENTS,
    post_id,
    comment
})

export const fetchComments = (id) => dispatch => (
    API
        .getComments(id)
        .then(comment => dispatch(getComments(id, comment)))
);
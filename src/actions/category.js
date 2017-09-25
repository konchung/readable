import * as ActionTypes from './actionTypes'
import * as API from '../utils/api';

export const getCategories = category => ({
    type: ActionTypes.GET_CATEGORIES,
    category
})

export const fetchCategories = () => dispatch => (
    API
        .getCategories()
        .then(category => dispatch(getCategories(category)))
);
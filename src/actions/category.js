import * as API from '../utils/api';

// GET_ALL_CATEGORIES
export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategories = category => ({
    type: GET_CATEGORIES,
    category
})

export const fetchCategories = () => dispatch => (
    API
        .getCategories()
        .then(category => dispatch(getCategories(category)))
);
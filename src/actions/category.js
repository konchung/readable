import * as API from '../utils/api';

// GET_ALL_CATEGORIES
export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategories = categories => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
    API
        .getCategories()
        .then(categories => dispatch(getCategories(categories)))
);
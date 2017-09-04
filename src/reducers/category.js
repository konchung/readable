import {
    GET_CATEGORIES
} from '../actions/category'

const initialCategories = {
    categories: [{name: 'react', path: 'react'}],
    isFetching: false
}

const categories = (state = initialCategories, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            console.log ('GET Cat')
            return {
                ...state,
                isFetching: true
            }
        default:
            return state
    }
}

export default categories
import {
    GET_CATEGORIES
} from '../actions/category'

const initialCategoryState = {
    category: [{name: 'react', path: 'react'}]
}

const category = (state = initialCategoryState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                category: action.category
            }
        default:
            return state
    }
}

export default category
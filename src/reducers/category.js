import * as ActionTypes from '../actions/actionTypes'

const initialCategoryState = {
    category: [{name: 'react', path: 'react'}]
}

const categoryReducer = (state = initialCategoryState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORIES:
            return {
                ...state,
                category: action.category
            }
        default:
            return state
    }
}

export default categoryReducer
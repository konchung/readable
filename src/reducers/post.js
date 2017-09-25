import * as ActionTypes from '../actions/actionTypes'

const initialPostState = {
    post: []
}

const postReducer = (state = initialPostState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_POSTS:
            return {
                ...state,
                post: action.post
            }
        case ActionTypes.GET_CATEGORY_POSTS:
            return {
                ...state,
                post: action.post
            }
        case ActionTypes.GET_POST:
            return {
                ...state,
                post: action.post
            }
        case ActionTypes.CLEAR_POST:
            return initialPostState
        default:
            return state
    }
}

export default postReducer
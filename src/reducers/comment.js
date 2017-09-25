import * as ActionTypes from '../actions/actionTypes'

const initialCommentState = {
    comment: []
}

const commentReducer = (state = initialCommentState, action) => {
    switch (action.type) {
        case ActionTypes.GET_COMMENTS:
            return {
                ...state,
                comment: state.comment.concat(action.comment)
            }
        case ActionTypes.CLEAR_COMMENTS:
            return initialCommentState
        default:
            return state
    }
}

export default commentReducer

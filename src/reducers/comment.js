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
        case ActionTypes.CLEAR_COMMENT:
            return initialCommentState
        case ActionTypes.UPVOTE_COMMENT:
            return {
                ...state
            }
        case ActionTypes.DOWNVOTE_COMMENT:
            return {
                ...state
            }             
        default:
            return state
    }
}

export default commentReducer

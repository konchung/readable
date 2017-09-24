import {
    GET_ALL_POSTS, GET_CATEGORY_POSTS, GET_POST, CLEAR_POST
} from '../actions/post';
import {
    GET_COMMENTS
} from '../actions/comment';

const initialPostState = {
    post: []
}

const post = (state = initialPostState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                post: action.post
            }
        case GET_CATEGORY_POSTS:
            return {
                ...state,
                post: action.post
            }
        case GET_POST:
            return {
                ...state,
                post: action.post
            }
        case CLEAR_POST:
            return initialPostState
        case GET_COMMENTS:
            return {
                ...state,
                post: state.post.map(p => {
                    if (p.id === action.post_id) {
                        p.comment = action.comment;
                    }
                    return p;
                })
            }
        default:
            return state
    }
}

export default post
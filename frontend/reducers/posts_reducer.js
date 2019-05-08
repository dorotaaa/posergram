import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge}  from 'lodash';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const postsReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return merge({}, state, action.posts);
        case RECEIVE_POST:
        case RECEIVE_COMMENT:
            return merge({}, state, action.payload.posts);
        case REMOVE_POST:
            let newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        case RECEIVE_USER:
            return merge({}, state, action.payload.posts)
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default postsReducer;

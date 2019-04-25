import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge}  from 'lodash';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_POSTS:
            return merge({}, state, action.posts);
        case RECEIVE_POST:
            return merge({}, state, {[action.post.id]: action.post});
        case REMOVE_POST:
            let newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default postsReducer;

import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';
import { REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return merge({}, action.comments);
        case RECEIVE_COMMENT:
            return merge({}, state,{ [action.comment.id]: action.comment });
        case RECEIVE_USER:
            return merge({}, state, action.payload.comments)
        case REMOVE_COMMENT:
            const newState = merge({}, state);
            delete newState[action.commentId];
            return newState; 
        case REMOVE_POST:
            return {}; 
        default:
            return state;
    }
};

export default commentsReducer;

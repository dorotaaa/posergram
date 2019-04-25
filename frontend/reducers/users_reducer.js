import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, action.currentUser.users);
        case RECEIVE_USER:
            return merge({}, state, action.payload.users);
        case LOGOUT_CURRENT_USER:
            return {};
        default: return state;
    }
};

export default usersReducer;
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            return merge({}, state, { [action.payload.users.id]: action.payload.users });
        default: return state;
    }
};

export default usersReducer;
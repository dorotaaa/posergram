import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';

const nullSession = {
    currentUser: null,
};

const sessionReducer = (state = nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return nullSession;
        default:
            return state;
    }
};

export default sessionReducer;
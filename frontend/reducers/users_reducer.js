import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, action.currentUser.users);
        case RECEIVE_USER:
            return merge({}, state, action.payload.users);
        case RECEIVE_USERS:
            return merge({}, state, action.payload)
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_FOLLOW:
            newState[action.follow.follower_id].following_ids.push(action.follow.user_id);
            newState[action.follow.user_id].follower_ids.push(action.follow.follower_id);
            return newState;
        case REMOVE_FOLLOW:
            let followingUserFollowingIds = newState[action.follow.follower_id].following_ids;
            let followedUserFollowerIds = newState[action.follow.user_id].follower_ids;
            newState[action.follow.user_id].follower_ids = followedUserFollowerIds.filter(id => id !== action.follow.follower_id);
            newState[action.follow.follower_id].following_ids = followingUserFollowingIds.filter(id => id !== action.follow.user_id);
            return newState;
        default: return state;
    }
};

export default usersReducer;
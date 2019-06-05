import * as FollowAPIUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const removeFollow = follow => ({
    type: REMOVE_FOLLOW,
    follow
});

export const createFollow = (follow) => (dispatch) => {
    debugger
    return FollowAPIUtil.createFollow(follow).
        then((follow) => {
            debugger
            return dispatch(receiveFollow(follow));
        });
};

export const deleteFollow = (follow) => (dispatch) => {
    debugger
    return FollowAPIUtil.deleteFollow(follow).
        then(() => {
            debugger
            return dispatch(removeFollow(follow));
        });
};
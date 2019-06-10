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
    
    return FollowAPIUtil.createFollow(follow).
        then((follow) => {
            
            return dispatch(receiveFollow(follow));
        });
};

export const deleteFollow = (id) => (dispatch) => {
    
    return FollowAPIUtil.deleteFollow(id).
        then((follow) => {
            
            return dispatch(removeFollow(follow));
        });
};
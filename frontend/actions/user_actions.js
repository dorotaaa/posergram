import * as APIUtil from '../util/users_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (payload) => ({
    type: RECEIVE_USERS,
    payload
});

const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
});



export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers().then(payload =>
        dispatch(receiveUsers(payload)))
);

export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id).then(payload =>
        dispatch(receiveUser(payload)))
);

export const updateUser = user => dispatch => (
    APIUtil.updateUser(user).then(user =>
        dispatch(receiveUser(user)))
);
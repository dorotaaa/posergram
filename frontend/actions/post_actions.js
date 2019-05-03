import * as PostAPIUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePost = (payload) => ({
    type: RECEIVE_POST,
    payload
});


const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const fetchPosts = (userId) => dispatch => (
    PostAPIUtil.fetchPosts(userId).then(posts =>
        dispatch(receivePosts(posts)))
);

export const fetchPost = id => dispatch => (
    PostAPIUtil.fetchPost(id).then(payload =>
        dispatch(receivePost(payload)))
);

export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post)
        .then(post => {
            dispatch(receivePost(post))
        })
);

export const updatePost = post => dispatch => (
    PostAPIUtil.updatePost(post)
        .then(post => {
            dispatch(receivePost(post))
        })
);

export const deletePost = id => dispatch => (
    PostAPIUtil.deletePost(id).then(postId =>
        dispatch(removePost(id)))
);


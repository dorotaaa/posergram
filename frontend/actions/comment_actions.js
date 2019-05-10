import * as CommentAPIUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    };
};

const receiveComment = (payload) => {
    return {
        type: RECEIVE_COMMENT,
        payload
    };
};

const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    };
};

export const fetchComments = () => (dispatch) => {
    return CommentAPIUtil.fetchComments().
        then((comments) => {
            return dispatch(receiveComments(comments));
        });
};

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then((payload) => {
            return dispatch(receiveComment(payload));
        });
};

export const deleteComment = id => (dispatch) => {
    return CommentAPIUtil.deleteComment(id)
        .then(({id}) => {
            return dispatch(removeComment(id));
        });
};
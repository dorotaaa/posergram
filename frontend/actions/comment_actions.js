import * as APIUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    };
};

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    };
};

const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    };
};

export const fetchComments = () => (dispatch) => {
    return APIUtil.fetchComments().
        then((comments) => {
            return dispatch(receiveComments(comments));
        });
};

export const createComment = comment => dispatch => {
    return APIUtil.createComment(comment)
        .then((comment) => {
            return dispatch(receiveComments(comment));
        });
};

export const deleteComment = id => (dispatch) => {
    return APIUtil.deleteComment(id)
        .then((commentId) => {
            return dispatch(removeComment(id));
        });
};
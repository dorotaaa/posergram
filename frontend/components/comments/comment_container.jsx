import { createComment, deleteComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import Comment from './comment';

const mapStateToProps = (state, ownProps) => {
    debugger
    let postId = ownProps["postId"]
    let userId = state.entities.users
    return ({
        body: "",
        postId: postId,
        userId: userId,
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        // deleteComment: (id) => dispatch(deleteComment(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
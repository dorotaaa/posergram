import { createComment, deleteComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import Comment from './comment';

const mapStateToProps = (state, ownProps) => {
    debugger
    let post = state.entities.posts[ownProps.postId];
    let currentUser = state.session.currentUser;
    return ({
        body: "",
        postId: post.id,
        userId: currentUser,
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        // deleteComment: (id) => dispatch(deleteComment(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

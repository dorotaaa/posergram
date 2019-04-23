import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import Comment from './comment';

const mapStateToProps = (state, ownProps) => {
    debugger
    let postId = state.entities.posts.id
    let user = state.entities.users[ownProps.match.params.userId]
    let comment = {
        body: "",
        postId: postId,
        userId: user.id,
    }
    return ({
        comment
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        // deleteComment: (id) => dispatch(deleteComment(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
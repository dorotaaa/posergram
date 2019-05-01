import { createComment, deleteComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { fetchUsers } from '../../actions/user_actions'
import Comment from './comment';

const mapStateToProps = (state, ownProps) => {
    debugger
    let post = state.entities.posts[ownProps.postId];
    let currentUser = state.session.currentUser;
    // let commenter = ownProps.username;
    return ({
        body: "",
        postId: post.id,
        userId: currentUser,
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        // fetchUsers: () => dispatch(fetchUsers()),
        // deleteComment: (id) => dispatch(deleteComment(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

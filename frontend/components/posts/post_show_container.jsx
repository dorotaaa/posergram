import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions'




const mapStateToProps = (state, ownProps) => {
    debugger
    let post = state.entities.posts[ownProps.photoId];
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;

    let commentIds = state.entities.posts[ownProps.photoId].comment_ids
    let comments = Object.values(state.entities.comments)
    // let comments = Object.values(state.entities.comments)
    return ({
        post: post || {},
        postId: post.id,
        userId: user,
        username: username,
        commentIds: commentIds,
        comments: comments || [],
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        // fetchPost: (id) => dispatch(fetchPost(id)),
        // deletePost: (id) => dispatch(deletePost(id)),
        // fetchComments: () => dispatch(fetchComments()),
        fetchUser: (id) => dispatch(fetchUser(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
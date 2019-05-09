import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchUser, fetchUsers} from '../../actions/user_actions'
import { fetchPost, deletePost } from '../../actions/post_actions';
import {deleteComment} from '../../actions/comment_actions';





const mapStateToProps = (state, ownProps) => {
    debugger
    let post = state.entities.posts[ownProps.photoId];
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;
    let photoUrl = state.entities.users[user].photoUrl;
    let currentUser = state.entities.users[state.session.currentUser].id;
    let commentIds = state.entities.posts[ownProps.photoId].comment_ids;
    let comments = Object.values(state.entities.comments)
    let likes = state.entities.posts[ownProps.photoId].liker_ids.length;
    let allLikes = state.entities.posts[ownProps.photoId].liker_ids;
    // let comments = Object.values(state.entities.comments)
    return ({
        post: post || {},
        postId: post.id,
        userId: user,
        username: currentUser.username,
        commentIds: commentIds,
        comments: comments || [],
        currentUserId: currentUser,
        profile: ownProps.profile,
        photoUrl: photoUrl,
        likes: likes,
        allLikes: allLikes
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        // fetchUser: (id) => dispatch(fetchUser(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deletePost: (id) => dispatch(deletePost(id)),
        fetchPost: (id) => dispatch(fetchPost(id)),
        deleteComment: (id) => dispatch(deleteComment(id)),
        // fetchComments: () => dispatch(fetchcomments())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
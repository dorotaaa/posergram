import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchUser, fetchUsers} from '../../actions/user_actions'
import { fetchPost, deletePost } from '../../actions/post_actions';
import {deleteComment} from '../../actions/comment_actions';




const mapStateToProps = (state, ownProps) => {
    let post = state.entities.posts[ownProps.photoId];
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;
    let photoUrl = state.entities.users[user].photoUrl;
    let currPhoto = state.entities.users[state.session.currentUser].photoUrl;
    let currentUser = state.entities.users[state.session.currentUser].id;
    let currUsername = state.entities.users[state.session.currentUser].username;
    let commentIds = state.entities.posts[ownProps.photoId].comment_ids;
    let comments = Object.values(state.entities.comments)
    let likes = state.entities.posts[ownProps.photoId].liker_ids.length;
    let allLikes = state.entities.posts[ownProps.photoId].liker_ids;
    return ({
        post: post || {},
        postId: post.id,
        userId: user,
        username: username,
        currUsername: currUsername,
        commentIds: commentIds || [],
        comments: comments || [],
        currentUserId: currentUser,
        profile: ownProps.profile,
        photoUrl: photoUrl,
        currPhoto: currPhoto,
        likes: likes,
        allLikes: allLikes
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        deletePost: (id) => dispatch(deletePost(id)),
        fetchPost: (id) => dispatch(fetchPost(id)),
        deleteComment: (id) => dispatch(deleteComment(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
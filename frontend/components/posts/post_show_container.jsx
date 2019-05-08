import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchUser, fetchUsers} from '../../actions/user_actions'
import { fetchPost, deletePost } from '../../actions/post_actions';





const mapStateToProps = (state, ownProps) => {
    let post = state.entities.posts[ownProps.photoId];
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;
    let currentUser = state.entities.users[state.session.currentUser].username;
    let commentIds = state.entities.posts[ownProps.photoId].comment_ids;
    let comments = Object.values(state.entities.comments)
    // let comments = Object.values(state.entities.comments)
    return ({
        post: post || {},
        postId: post.id,
        userId: user,
        username: username,
        commentIds: commentIds,
        comments: comments || [],
        currentUser: currentUser,
        profile: ownProps.profile
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        // fetchUser: (id) => dispatch(fetchUser(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deletePost: (id) => dispatch(deletePost(id)),
        fetchPost: (id) => dispatch(fetchPost(id)),
        // fetchComments: () => dispatch(fetchcomments())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
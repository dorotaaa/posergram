import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchUser, fetchUsers} from '../../actions/user_actions'





const mapStateToProps = (state, ownProps) => {
    debugger
    let post = state.entities.posts[ownProps.photoId];
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;
    let currentUser = state.entities.users[state.session.currentUser].username;
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
        currentUser: currentUser,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchUsers: () => dispatch(fetchUsers()),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
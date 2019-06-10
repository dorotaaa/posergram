import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import UserProfile from './user_profile';


const mapStateToProps = (state, ownProps) => {
    
    let currentUserId = state.session.currentUser;
    let user = state.entities.users[ownProps.match.params.userId];
    let currentUser = state.entities.users[currentUserId];
    let posts = Object.values(state.entities.posts);
    let followingId = parseInt(ownProps.match.params.userId);
    return ({
        user: user,
        posts: posts,
        currentUser: currentUser,
        currentUserId: currentUserId,
        followingId: followingId,
    })
}


const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: id => dispatch(fetchUser(id)),
        logout: () => dispatch(logout()),
        fetchPosts: (userId) => dispatch(fetchPosts(userId)),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (follow) => dispatch(deleteFollow(follow)),   
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import UserProfile from './user_profile';


const mapStateToProps = (state, ownProps) => {

    const currentUser = state.session.currentUser
    const user = state.entities.users[ownProps.match.params.userId];
    let posts = Object.values(state.entities.posts)
    return ({
        user: user,
        posts: posts,
        currentUserId: currentUser,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: id => dispatch(fetchUser(id)),
        logout: () => dispatch(logout()),
        fetchPosts: (userId) => dispatch(fetchPosts(userId))
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
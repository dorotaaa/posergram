import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import UserProfile from './user_profile';


const mapStateToProps = (state) => {
    const user = state.entities.users[state.session.currentUser];
    let posts = user.post_ids.map(post_id => state.entities.posts[post_id]);
    if (posts.includes(undefined)) {
        posts = [];
    }
    return ({
        user: user,
        posts: posts,
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
import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import UserProfile from './user_profile';


const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    // debugger
    let posts = user.post_ids.map(post_id => state.entities.posts[post_id]);
    // if (user && user.post_ids) {
    //     posts = user.post_ids.map(post_id => state.entities.posts[post_id]);
    // } else {
    //     posts = [];
    // }
    if (posts.includes(undefined)) {
        posts = [];
    }
        // debugger
    return ({
        user: user,
        posts: posts,
        userId: user.id,
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
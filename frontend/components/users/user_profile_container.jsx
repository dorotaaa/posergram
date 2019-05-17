import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import UserProfile from './user_profile';


const mapStateToProps = (state, ownProps) => {
    debugger
    let currentUser = state.session.currentUser
    let user = state.entities.users[ownProps.match.params.userId];
    // let userId = state.entities.users[ownProps.match.params.userId].id;
    let posts = Object.values(state.entities.posts)
    // let postsArr = [];
    //     for (let i = 0; i < posts.length; i++) {
    //         if ((posts[i].user_id) === userId) {
    //             postsArr.push(posts[i])
    //         }
    //         return postsArr;
    //     }
    debugger
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
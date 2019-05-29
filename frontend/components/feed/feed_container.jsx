import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state) => {
    debugger
    const currentUserId = parseInt(state.session.currentUser);
    const currentUser = state.entities.users[currentUserId];
    const posts = Object.values(state.entities.posts).reverse();
    return ({
        currentUser,
        posts,
        currentUserId
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        // fetchUser: id => dispatch(fetchUser(id)),
        fetchPosts: (userId) => dispatch(fetchPosts(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

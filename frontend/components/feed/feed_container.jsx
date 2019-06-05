import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
    
    const currentUserId = parseInt(state.session.currentUser);
    const currentUser = state.entities.users[currentUserId];
    const posts = Object.values(state.entities.posts).reverse();
    const comments = state.entities.comments;
    const users = state.entities.users;
    return ({
        currentUser,
        posts,
        currentUserId,
        comments,
        users,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        // fetchUser: id => dispatch(fetchUser(id)),
        fetchPosts: (userId) => dispatch(fetchPosts(userId)), 
        fetchComments: () => dispatch(fetchComments()),
        deleteComment: (id) => dispatch(deleteComment(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

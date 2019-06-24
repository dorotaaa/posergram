import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
    const currentUserId = parseInt(state.session.currentUser);
    const currentUser = state.entities.users[currentUserId];
    let followingPosts = Object.values(state.entities.posts).filter(post => currentUser.following_ids.includes(post.user_id));
    let currentUserPosts = Object.values(state.entities.posts).filter(post => (currentUserId === post.user_id));
    const posts = followingPosts.concat(currentUserPosts).reverse();
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
        fetchPosts: (userId) => dispatch(fetchPosts(userId)), 
        fetchComments: () => dispatch(fetchComments()),
        deleteComment: (id) => dispatch(deleteComment(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

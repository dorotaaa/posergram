import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';



const mapStateToProps = (state, ownProps) => {
    // debugger
    let postId = ownProps.photoId;
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;
    return ({
        postId: postId,
        post: state.entities.posts[postId] || {},
        userId: user,
        username: username,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPost: (id) => dispatch(fetchPost(id)),
        deletePost: (id) => dispatch(deletePost(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
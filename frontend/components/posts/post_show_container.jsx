import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';




const mapStateToProps = (state, ownProps) => {
    debugger
    let postId = ownProps.photoId;
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;
    let comments = Object.values(state.entities.comments)
    return ({
        postId: postId,
        post: state.entities.posts[postId] || {},
        userId: user,
        username: username,
        comments: comments || [],
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPost: (id) => dispatch(fetchPost(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        fetchComments: (postId) => dispatch(fetchComments(postId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';




const mapStateToProps = (state, ownProps) => {
    debugger
    let post = state.entities.posts[ownProps.photoId];
    let user = ownProps.user.id;
    let username = state.entities.users[user].username;
    let comments = Object.values(state.entities.posts[post.id].comments)
    return ({
        post: post || {},
        postId: post.id,
        userId: user,
        username: username,
        comments: comments || [],
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPost: (id) => dispatch(fetchPost(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        fetchComments: () => dispatch(fetchComments()),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
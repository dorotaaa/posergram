import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';



const mapStateToProps = (state, ownProps) => {
    // debugger
    let postId = ownProps.match.params.postId;
    let userId = ownProps.match.params.id;
    return ({
        postId: postId,
        post: state.entities.posts[postId] || {},
        userId: userId,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPost: (id) => dispatch(fetchPost(id)),
        deletePost: (id) => dispatch(deletePost(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
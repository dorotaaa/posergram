import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
    let userId = state.session.currentUser
    let pastLike = ownProps.likes.includes(userId);
    let postId = ownProps.postId;
    let likerIds = ownProps.likes;
    return ({
        userId: userId,
        pastLike: pastLike,
        postId: postId,
        likerIds: likerIds,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (post_id, user_id) => dispatch(deleteLike(post_id, user_id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);
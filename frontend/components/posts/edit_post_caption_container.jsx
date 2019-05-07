import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost } from '../../actions/post_actions';
import EditPost from './edit_post_caption';

const mapStateToProps = (state, ownProps) => {
    debugger
    return ({
        user: state.entities.users[state.session.currentUser],
        post: state.entities.posts[ownProps.postId],
        modalClose: ownProps.captionModal,
        otherModal: ownProps.otherModal,
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        updatePost: post => dispatch(updatePost(post))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
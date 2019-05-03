import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost } from '../../actions/post_actions';
import EditPostCaption from './edit_post_caption';

const mapStateToProps = (state, ownProps) => {
    debugger
    return ({
        user: state.entities.users[state.session.currentUser],
        caption
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        updatePost: post => dispatch(updatePost(post))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostCaption);
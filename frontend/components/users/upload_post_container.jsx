import { connect } from 'react-redux';
import UploadForm from './upload_post_form';
import { createPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        user: state.entities.users[state.session.currentUser]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: id => dispatch(fetchUser(id)),
        createPost: (post) => dispatch(createPost(post))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
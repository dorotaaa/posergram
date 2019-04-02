import { connect } from 'react-redux';
import PostForm from './upload_post_form';
import { createPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
            caption: "",
            image_url: "",
            user_id: state.session.currentUser,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: id => dispatch(fetchUser(id)),
        createPost: (post) => dispatch(createPost(post))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
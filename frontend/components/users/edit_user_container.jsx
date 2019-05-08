import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../actions/user_actions'
import EditUser from './edit_user';

const mapStateToProps = (state) => {
    debugger
    return ({
        user: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        updateUser: user => dispatch(updateUser(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
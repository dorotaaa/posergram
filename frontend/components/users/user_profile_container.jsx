import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile';


const mapStateToProps = (state) => {
    return ({
        user: state.entities.users[state.session.currentUser]
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: id => dispatch(fetchUser(id)),
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
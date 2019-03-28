import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LogoutForm from './logout_form';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.currentUser]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);
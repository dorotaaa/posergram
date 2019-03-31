import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchUsers} from '../../actions/user_actions';
import NavBar from './nav_bar';


const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser,
        users: Object.values(state.entities.users)
    })
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
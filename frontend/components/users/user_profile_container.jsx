import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
    return ({
        user: state.entities.users[state.session.currentUser]
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: id => dispatch(fetchUser(id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
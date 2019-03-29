import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {(

)};

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchUser: (id) => dispatch(fetchUser(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
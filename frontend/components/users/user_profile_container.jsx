import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { withRouter }from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        user: state.entities.users[ownProps.match.params.id]
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: id => dispatch(fetchUser(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
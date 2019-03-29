import {fetchUser} from "../../actions/user_actions";
import { connect } from "tls";

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.match.params.id];
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser = id => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
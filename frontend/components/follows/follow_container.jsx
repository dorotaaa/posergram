import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Follow from './follow';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    let currentUserId = state.session.currentUser;
    let currentUser = state.entities.users[state.session.currentUser];
    let followingId = state.entities.users[state.session.currentUser].id;
    return ({
        currentUserId,
        currentUser,
        followingId,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (id) => dispatch(fetchUser(id)),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (id) => dispatch(deleteFollow(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
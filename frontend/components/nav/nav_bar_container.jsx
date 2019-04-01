import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavBar from './nav_bar';




const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

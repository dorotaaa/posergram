import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavBar from './nav_bar';




const mapStateToProps = (state) => {
    debugger
    return ({
        currentUser: state.session.currentUser
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import withRouter from 'react-router-dom';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        buttonText: 'Sign Up'
    };
};


const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

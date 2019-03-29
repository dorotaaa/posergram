import { connect } from 'react-redux';
import { login, clearErrors} from '../../actions/session_actions';
import LoginForm from './login_form';
import withRouter from 'react-router-dom';

const mapStateToProps = (state) => {
   return {
       errors: state.errors.session,
       formType: 'Log In',
       buttonText: 'Log In'
   };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

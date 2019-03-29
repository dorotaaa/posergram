import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        // this.forgotPassword = this.forgotPassword.bind(this);
     }


    handleUpdate(field) {
        return e => this.setState(
            { [field]: e.target.value }
        )
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.login({
            username: 'daddyzaddyyy',
            password: 'racksonracks'
        }).then(() => this.props.history.push('/show'));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/show'));
    }

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </div>
        );
    }

    // forgotPassword() {
    //     this.setState({[pw_error]: "Sucks."})
    // }

    render() {
        return (
            <>
                <div className="login-outer-form-div">

                    <div className="logup-form">
                    <form>
                           {/* onSubmit={this.handleSubmit} value={this.props.formType} */}
                        <header className="logup-instagram-logo">Posergram</header>
                
                        <label>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleUpdate('username')}
                                placeholder="Phone number, username, or email" />
                        </label>
                        <label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleUpdate('password')}
                                placeholder="Password" />
                        </label>
                    <div className="logup-form-box">
                        <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
                    </div>

                    <div className="logup-or"><div> <hr className="hr-line" /></div>
                    <strong>OR</strong><div><hr className="hr-line" /></div></div>

                    <div className='poser-link'>
                        <Link to={`/login`} onClick={this.handleDemoUser}>Log in as Poser</Link>
                    </div>
                
                    <div className="login-errors">{this.renderErrors()}</div>

                    
                      <div class="forgot-pw"> 
                    <Link to={`/login`}>Forgot password?</Link>
                        </div> 

                    </form>

                <div className='foot-logup-box'>
                    Don't have an account? <Link to={`/signup`} id='signup-button'>Sign up</Link>
                </div>

                </div>
            </div>
            </>
        )
    }
};




export default withRouter(LoginForm);
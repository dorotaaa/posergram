import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', fullname: '', email: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState(
            {[field]: e.target.value}
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push('/show'));
    }

    renderErrors() {
        // return (
        //     <ul>
        //         {this.props.errors.map((error, i) => (
        //             <li key={`error-${i}`}>
        //                 {error}
        //             </li>
        //         ))}
        //     </ul>
        // );
    }

    render() {
        return (
            <>
            <div className="outer-form-div">
                    <div className="dummy-iphone">
                        <img id="phone" src="/assets/dummy-phone-2x-cfda84ea67ee6c59614f1b1b2e4eb073c57460b234cbe06784a27d4df3ce7b98.png" />
                    </div>

                <div className="signup-form">
                    
                {/* onSubmit={this.handleSubmit} value={this.props.formType} */}

                    <form>
                        <img className="instagram-logo" src="" />
                        <h2 className="form-header">Sign up to see photos and videos from your friends.</h2>
                    <label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUpdate('username')}
                            placeholder="Username" />
                    </label>
                    <label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleUpdate('password')}
                            placeholder="Password" />
                    </label>
                    <label>
                        <input
                            type="text"
                            value={this.state.fullname}
                            onChange={this.handleUpdate('fullname')}
                            placeholder="Full Name" />
                    </label>
                    <label>
                            <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleUpdate('email')}
                            placeholder="Email"/>
                    </label>
                        <div className="form-box">
                            <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
                        </div>
                        <h4 className="form-footer">
                            By signing up, you agree to Dorota's Terms , Data Policy and Cookies Policy .
                        </h4>
                        <div className="errors">{this.renderErrors()}</div>
                </form>
                    <div className='foot-login-box'>
                       Have an account? <Link to={`/login`} id='login-button'>Login</Link>
                    </div>
                </div>
            </div>
            </>
        )
    }
};

export default withRouter(SignUpForm);

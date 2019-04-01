import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', fullname: '', username: '', password: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleUpdate(field) {
        return e => this.setState(
            {[field]: e.target.value}
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup({user: this.state})
            .then(() => this.props.history.push('/profile'));
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.login({user:
            {username: 'putin',
            password: 'vladimir'}
        })
        .then(() => this.props.history.push('/profile'));
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


    render() {
        return (
            <>
            <div className="outer-form-div">
                    <div className="dummy-iphone">
                        <img id="phone" src={window.phoneDummy}/>
                        <img id="phone-photo" src={window.phonePhoto}/>
                    </div>

                <div className="signup-form">
                    

                    <form onSubmit={this.handleSubmit} value={this.props.formType}>

                        <h1 className="instagram-logo">
                            <img id="pgLogo" src={window.pgLogo}/>
                        </h1>

                        <h2 className="form-header">Sign up to see photos and videos from your friends.</h2>
                            <div className="fb-form-box">
                                <button onClick={this.handleDemoUser}>Log in with Poser Login</button>
                            </div>
                            <div className="or"><div> <hr className="hr-line"/></div><strong>OR</strong><div><hr className="hr-line"/></div></div> 
                    
                        <label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleUpdate('email')}
                                placeholder="Mobile Number or Email" />
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
                    
                   
                        <div className="form-box">
                            <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
                        </div>
                        <div className="errors">{this.renderErrors()}</div>
                        <h4 className="form-footer">
                            By signing up you agree to Dorota's <strong>Terms , Data Policy</strong> and <strong>Cookies Policy</strong> .
                        </h4>
                </form>
                    <div className='foot-login-box'>
                       Have an account? <Link to={`/login`} id='login-button'>Log in</Link>
                    </div>
                    
                </div>
            </div>


                {/* <footer className="footer">
                    <nav>
                        <div className="nav-div"> © 2019 POSERGRAM </div>
                    </nav>
                </footer> */}
            </>
        )
    }
};

export default withRouter(SignUpForm);

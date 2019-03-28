import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
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

                    <div className="signup-form">
                    <form>
                           {/* onSubmit={this.handleSubmit} value={this.props.formType} */}
                        <img className="instagram-logo" src="" />
                
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
                    <div className="form-box">
                        <button onClick={this.handleDemoUser}>Poser Login</button>
                    </div>
                
                        <div className="errors">{this.renderErrors()}</div>
                    </form>
                <div className='foot-login-box'>
                    Don't have an account? <Link to={`/signup`} id='login-button'>Sign up</Link>
                </div>
                </div>
            </div>
            </>
        )
    }
};




export default withRouter(LoginForm);
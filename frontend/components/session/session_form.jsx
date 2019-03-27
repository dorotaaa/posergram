import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState(
            {[field]: e.target.value}
        )
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.formAction({
            username: 'daddyzaddyyy',
            password: 'racksonracks'
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.formAction(this.state)
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
            <div>
                <h1>Pgram</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            className="login-form"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUpdate('username')}
                            placeholder="Username" />
                    </label>
                    <label>
                        <input 
                            className="login-form"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleUpdate('password')}
                            placeholder="Password" />
                    </label>
                    <label>
                        <input className="demo-login"
                                type="submit" 
                                value="Demo Log In" 
                                onClick={this.handleDemoUser}/>
                    </label>

                        <button onClick={this.handleSubmit}>{this.props.formType}</button>
                        <ul>{this.renderErrors()}</ul>
                </form>
                    <div className="signup-link">
                        <p>Don't have an account?
                <Link to="/signup"> Sign up</Link>
                        </p>
                    </div>
            </div>
            </>
        )
    }
};

export default withRouter(SessionForm);
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
                <div>
                    <h1>ME</h1>
                    <form onSubmit={this.handleSubmit} value={this.props.formType}>
                        <label>
                            <input
                                className="signup-form"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleUpdate('username')}
                                placeholder="Username" />
                        </label>
                        <label>
                            <input
                                className="signup-form"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleUpdate('password')}
                                placeholder="Password" />
                        </label>
                        <label>
                            <input className="demo-login"
                                type="submit"
                                value="Demo Login"
                                onClick={this.handleDemoUser} />
                        </label>

                        <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
                        <ul>{this.renderErrors()}</ul>
                    </form>
                </div>
            </>
        )
    }
};

export default withRouter(LoginForm);
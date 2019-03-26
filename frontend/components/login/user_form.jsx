import React from 'react';
import { merge } from 'lodash';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.form(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
            <br />
                {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}

                    <div>Login
                        <br />
                    <label>Username:
                <input type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                        <br />
                        <label>Password:
                <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm;

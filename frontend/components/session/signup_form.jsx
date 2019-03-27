import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

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
            <div>
                <h1>SAVE</h1>
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
    
                        <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
                        <ul>{this.renderErrors()}</ul>
                </form>
                    <div className="Login-button">
                        <p>Have an account?
                <Link to="/login"> Login</Link>
                        </p>
                    </div>
            </div>
            </>
        )
    }
};

export default withRouter(SignUpForm);
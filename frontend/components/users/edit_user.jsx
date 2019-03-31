import { withRouter } from 'react-router-dom';
import React from 'react';

class EditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: this.props.user.fullname,
            username: this.props.user.username,
            bio: this.props.user.bio,
            email: this.props.user.email,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[fullname]', this.state.fullname);
        formData.append('user[username]', this.state.username);
        formData.append('user[bio]', this.state.bio);
        formData.append('user[email]', this.state.email);

        this.props.updateUser(formData)
            .then(() => this.props.history.push("/show"))
    }
        

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }


    render() {
        return (
        <div className="edit-profile">
            <div className="edit-profile-container">
            <div>
                <h1>{this.state.username}</h1>
            </div>

            <form onSubmit={this.handleSubmit}>
                <label id="fullname">Full Name
                    <input type="text" onChange={this.handleUpdate("fullname")}/>
                </label>

                <label id="username">Username
                    <input type="text" onChange={this.handleUpdate("username")}/>
                </label>

                <label id="bio">Bio
                    <input type="text" onChange={this.handleUpdate("bio")} />
                </label>

                <label id="email">Email
                    <input type="text" onChange={this.handleUpdate("email")} />
                </label>
                
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                
            </form>
            </div>
        </div>

    )}
}

export default withRouter(EditUser);


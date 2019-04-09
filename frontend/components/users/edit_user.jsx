import { withRouter } from 'react-router-dom';
import React from 'react';

class EditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.user.id || "",
            fullname: this.props.user.fullname || "",
            username: this.props.user.username || "",
            bio: this.props.user.bio || "",
            email: this.props.user.email || "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(
            { user: this.state,
                id: this.state.id
            })
            .then(() => this.props.history.push(`/users/${this.props.user.id}`))
    }
        

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }


    render() {
        return (
        <div className="main-edit-div">
        <ul className="edit-profile">
            <li>
                Edit Profile
            </li>
        </ul>
            <article className="edit-profile-container">
            <div className="edit-username">
                <h1>{this.state.username}</h1>
            </div>

            <form className="edit-form" onSubmit={this.handleSubmit}>
            
                <div className="edit-input">
                <label>Fullname</label>
                    <input type="text" value={this.state.fullname} onChange={this.handleUpdate("fullname")}/>
                </div>

                <div className="edit-input">
                <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUpdate("username")} />
                </div>

                <div className="edit-input">
                    <label>Bio</label>
                    <input type="text" value={this.state.bio} onChange={this.handleUpdate("bio")} />
                </div>

            
                <div className="edit-input">
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleUpdate("email")} />
                </div>

                <div className="edit-button">
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                
            </form>
            </article>
    </div>

    )}
}

export default withRouter(EditUser);


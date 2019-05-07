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
            photoUrl: this.props.user.photoUrl,
            photoFile: null,
            disabledOrNot: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("user[fullname]", name);
        formData.append("user[username]", username);
        formData.append("user[bio]", bio);
        formData.append("user[email]", email);
        if (this.state.photoFile) {
            formData.append("user[photo]", this.state.photoFile);
        }
        this.props.updateUser({user: this.state} )
            .then(() => this.props.history.push(`/users/${this.props.user.id}`))
    }
        

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value,
            disabledOrNot: false
        })
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({
                disabledOrNot: false,
                photoFile: file,
                photoUrl: fileReader.result
            });
        };

        if (file) fileReader.readAsDataURL(file);
    }


    render() {

        let preview;
        if (this.state.photoUrl) {
            preview = <img className="edit-pic-preview" src={this.state.photoUrl} />
        } else {
            preview = <img className="current-pic" src={this.state.photoUrl} />
        };

        return (
            <>
         <form className="edit-form-container" onSubmit={this.handleSubmit}>
                <div className="edit-pic">
                    <aside className="edit-pic-left">
                        <label className="file-input-label" htmlFor="file-selector">
                            {preview}
                        </label>
                    </aside>

                    <div>
                        <h1>
                            {this.state.username}
                        </h1>

                        <label className="file-input-label" htmlFor="file-selector">
                            Change Profile Photo
                        </label>

                        <input type="file" onChange={this.handleFile} id="file-selector" />
                    </div>
                </div>

                <div className="edit-name">
                    <aside className="edit-name-left">
                        <label htmlFor="name">
                            Name
                        </label>
                    </aside>

                    <div>
                        <input type="text" id="name" onChange={this.handleUpdate("fullname")} value={this.state.fullname} />
                    </div>
                </div>

                <div className="edit-username">
                    <aside className="edit-username-left">
                        <label htmlFor="username">
                            Username
              </label>
                    </aside>

                    <div>
                        <input type="text" id="username" value={this.state.username} readOnly/>
                    </div>
                </div>

                <div className="edit-bio">
                    <aside className="edit-bio-left">
                        <label htmlFor="bio">
                            Bio
                        </label>
                    </aside>

                    <div>
                        <input type="text" id="bio" onChange={this.handleUpdate("bio")} value={this.state.bio} />
                    </div>
                </div>

                <div className="edit-private">
                    <h2>
                        Private Information
                    </h2>
                </div>

                <div className="edit-email">
                    <aside className="edit-email-left">
                        <label htmlFor="email">
                            Email
                        </label>
                    </aside>

                    <div>
                        <input type="text" id="email" onChange={this.handleUpdate("email")} value={this.state.email} />
                    </div>
                </div>

                <input className="edit-submit" type="submit" value="Submit" disabled={this.state.disabledOrNot} />
            </form>
        </>
    )};
}

export default withRouter(EditUser);


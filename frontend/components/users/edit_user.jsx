import React from 'react';

class EditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.fullname,
            username: this.props.username,
            bio: this.props.bio,
            email: this.props.email,
            photo: null,
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.update(this.state)
            .then(() => this.props.history.push('/'));
    }

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id)
    }

    render() {
        <div>
            <div>
                <h1>{this.state.username}</h1>
            </div>

            <form onSubmit={this.handleSubmit}>
                <label id="name">Name
                    <input type="text" onChange={this.handleUpdate}/>
                </label>

                <label id="username">Username
                    <input type="text" onChange={this.handleUpdate}/>
                </label>

                <label id="bio">Bio
                    <input type="text" onChange={this.handleUpdate} />
                </label>

                <label id="email">Email
                    <input type="text" onChange={this.handleUpdate} />
                </label>
                
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                
            </form>
        </div>
    }

}

export default withRouter(EditUser);
import { withRouter } from 'react-router-dom';
import React from 'react';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            id: this.props.post.id,
            caption: this.props.post.caption,
            // photo: this.props.post.photo,
            // user_id: this.props.post.user_id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.updatePost({post: this.state})
        .then(() => this.props.modalClose(),
                this.props.otherModal());
    }
        

    handleUpdate(field) {
        debugger
        return e => this.setState({
            [field]: e.target.value,
        })
    }


    render() {
        debugger
        return (
            <div>
                <form className="caption-input" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="photo-caption"
                        value={this.state.caption}
                        onChange={this.handleUpdate("caption")} />
                <button className="submitButton" onClick={this.handleSubmit}>Update</button>
                </form>
            </div>

    )}
}

export default withRouter(EditPost);
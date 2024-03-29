import { withRouter } from 'react-router-dom';
import React from 'react';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.post.id,
            caption: this.props.post.caption,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePost({post: this.state})
        .then(() => this.props.modalClose(),
                this.props.otherModal());
    }
        

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value,
        })
    }


    render() {
        return (
           
                <form className="edit-caption-input" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="edit-photo-caption"
                        value={this.state.caption}
                        onChange={this.handleUpdate("caption")} 
                        />
                        
                <button className="caption-update-button" onClick={this.handleSubmit}>Update</button>
                </form>

    )}
}

export default withRouter(EditPost);
import { withRouter } from 'react-router-dom';
import React from 'react';

class EditPostCaption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.user.id || "",
            caption: this.props.post.caption || "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePost(
            { post: this.state,
                id: this.state.id
            })
    }
        

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value,
        })
    }


    render() {
        return (
            <div>
                <div className="caption-input">
                    <input
                        type="text"
                        className="photo-caption"
                        value={this.state.caption}
                        onChange={this.handleUpdate("caption")} />
                </div>
                <button className="submitButton" onClick={this.handleSubmit}>Submit</button>
            </div>

    )}
}

export default withRouter(EditPostCaption);
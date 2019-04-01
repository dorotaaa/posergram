import React from 'react';
import {withRouter} from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(
            {
                
            })
            .then(() => this.props.history.push("/profile"))
    }


    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }


    render() {

        return (
            <div className="upload-div">
            
                <h2 className="upload-title">Upload Your Own Photo</h2>

                <div className="upload-form">
                    <form onSubmit={this.handleSubmit}>
                        <div><textarea className="photo-caption" placeholder="Add a caption..." onChange={this.handleUpdate("caption")}/></div>
                        <div className='upload-btn-wrapper'>
                            <button className="file-upload-button">Upload Photo</button>
                            <input type="file" onChange={this.handleFile.bind(this)} />
                        </div>
                        <div><input className="post-submit-button" type="submit" value="Submit" /></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(PostForm);
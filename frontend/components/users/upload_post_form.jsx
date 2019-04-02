import React from 'react';
import {withRouter} from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            caption: this.props.caption,
            user_id: this.props.user_id
        }
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.createPost(this.state)
    //         .then(() => this.props.history.push("/profile"))
    // }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[user_id]", this.state.user_id);
        formData.append("post[caption]", this.state.caption);
        if (this.state.imageFile) {
            formData.append('post[image_url]', this.state.imageFile)
        }
        this.props.createPost(formData)
            .then(() => {
                this.props.history.push("/profile")
            });
    }

    handleExit() {
        $(".upload-div").css("visibility", "hidden");
    }

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleFile(e) {
        debugger
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({imageUrl: "", imageFile: null });
        }
    }

    render() {
        debugger
        return (
            <div className="upload-div">
            
                <button onClick={() => this.handleExit}>exit</button>
                <div className="upload-form">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                type="text" 
                                className="photo-caption" 
                                placeholder="Add a caption" 
                                onChange={this.handleUpdate("caption")}/>
                        </div>
                        <div className='upload-button'>
                            <button className="upload-button">Upload oppppopo</button>
                            <input type="file" onChange={this.handleFile}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(PostForm);
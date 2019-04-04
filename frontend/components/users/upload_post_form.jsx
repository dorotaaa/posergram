import React from 'react';
import {withRouter} from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            caption: this.props.caption,
            user_id: this.props.user_id
        }
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleFile = this.handleFile.bind(this);

        this.focusRef = React.createRef();
    }


    handleSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[user_id]", this.state.user_id);
        formData.append("post[caption]", this.state.caption);
        if (this.state.imageFile) {
            formData.append('post[photo]', this.state.imageFile)
        }
        this.props.createPost(formData)
            .then(() => {
                this.props.history.push("/")
            });
    }

    // componentDidMount(){
    //     document.addEventListener("click",
    //         this.props.closeUploadForm
    //     )
    // }

    componentDidMount(){
        debugger
        this.focusRef.current.focus()
    }

    // componentWillUnmount(){
    //     document.removeEventListener("click", this.props.closeUploadForm)
    // }


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

    // stopProp(e){
    //     debugger
    //      e.stopPropagation()
    // }

    render() {
        return (
            <div ref={this.focusRef} onBlur={this.props.closeUploadForm} className="upload-div">
                <div className="flag-div"></div>
            
                <div className="upload-form-div">
                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <div className='upload-button'>
                           
                            <div className="upload-button">
                                <img className="upload-heart" src={window.upload} />
                                <label className="upload-file-button" htmlFor="file">
                                    <img className="upload-logo" src={window.upLogo} />
                                    <input className="inputfile" type="file" onChange={this.handleFile} />
                                </label>
                            </div>

                            {/* <div className="upload-file-button"></div> */}
                        </div>
                        <div>
                            <div className="caption-input">
                                <input
                                    type="text"
                                    className="photo-caption"
                                    placeholder="Write a caption..."
                                    onChange={this.handleUpdate("caption")} />
                            </div>
                            <button className="submitButton" onClick={this.handleSubmit}>Submit</button>
                        </div>
                       
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(PostForm);
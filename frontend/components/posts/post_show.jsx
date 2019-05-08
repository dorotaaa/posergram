import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';
import EditPostCaptionContainer from './edit_post_caption_container';
import Modal from 'react-modal';


class PostShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            renderDeleteNCancel: false,
            modalOpen: false,
            showUploadForm: false,
            // commentId: 0,
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.renderDeleteNCancel = this.renderDeleteNCancel.bind(this);
        this.toggleRenderState = this.toggleRenderState.bind(this);
        this.handleModalClick = this.handleModalClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        // this.handleDeleteComment = this.handleDeleteComment.bind(this)
    }


    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.comments.length !== this.props.comments.length)){
            // this.props.fetchPost(this.props.postId);
            this.props.fetchPost(this.props.postId);
        }
    }

    handleDelete() {
        this.props.profile.closeModal();
        this.props.deletePost(this.props.postId);
             // this.props.history.push()     
    }

    // handleDeleteComment(e) {
    //     e.preventDefault();
    //     this.setState({
    //         commentId: e.target.dataset.id,
    //     })
    //     this.props.deleteComment(commentId)
    // }
  
    handleModalClick() {
        this.setState({ modalOpen: true });
    }
    
    onModalClose() {
        this.setState({ modalOpen: false });
    }
    
    
    renderDeleteNCancel(){
        let deleteModal ;
            if (this.state.renderDeleteNCancel) {
                deleteModal =
                <div className="dcm-1">
               ( <div className="delete-modal">
                    <div className="butts">
                        <div className="edit-butt"><button onClick={this.handleModalClick}>Edit Caption</button></div>
                        <div className="delete-butt"><button onClick={this.handleDelete}>Delete Post</button></div>
                        <div className="cancel-butt"><button onClick={this.toggleRenderState}>Cancel</button></div>
                    </div>
                </div>)
                </div>
            } else {
                deleteModal = null;
            }
            return deleteModal;
    }

    toggleRenderState(){
        if (this.props.username === this.props.currentUser) {
            this.setState({
                renderDeleteNCancel: (this.state.renderDeleteNCancel ? false : true)
            })
        } else {
            this.setState({ renderDeleteNCancel: false })
        }
    }

    render(){

        if (this.state.modalOpen) {
            this.uploadForm = <EditPostCaptionContainer otherModal={this.toggleRenderState} captionModal={this.onModalClose} postId={this.props.postId}/>
        } else {
            this.uploadForm = null;
        }
       
        let commsArr = [];

        for (let i = 0; i < this.props.commentIds.length; i++) {
           for (let j = 0; j < this.props.comments.length; j++) {
               if (this.props.commentIds[i] === this.props.comments[j].id) {
                   commsArr.push(this.props.comments[j])
               }
           }
        }
        
        debugger
        const comms = commsArr.map((comment, idx) => {

            return (
                <li className="comment-li" key={idx}>
                    <div className="comment-li">
                    <img className="comment-pic" src={this.props.photoUrl}/>
                    <div className="comment-username">{this.props.username}</div>
                    <div className="comment">{comment.body} </div>
                    </div>
                </li>
            )
        })

        let modalStyle = {
            overlay: {
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999999,
            }
        }

        return(


            <div className="show-wrapper">

            <div className='close-button-wrp'>
            <button onClick={this.props.closeModal} 
                    className='close-button'>×</button>
            </div>

            <div className='post-show-container'>

                <div className='post-show-photo-container'>
                <div className="psp">
                    <img className='post-show-image' 
                        src={this.props.post.photo} />
                </div>

                <div className="header-div">

            <header className="post-header">
                <button onClick={this.props.closeModal}>
                    <img className="header-pic" src={this.props.photoUrl}/>
                </button>
                <button onClick={this.props.closeModal}>
                    <div className="show-name">{this.props.username}</div>
                </button>

                <div className="dots">
                    <button id="dot-btn"
                        onClick={this.toggleRenderState}>
                        <img src={window.dots} />
                    </button>
                </div>
            </header>

                    <div className="cap-header">
                        <img className="cap-pic" src={this.props.photoUrl} />
                        <h2 className="caption-u-div">{this.props.username}
                        </h2>
                        <div className="caption-div">{this.props.post.caption}</div>
                    </div>

                       <div className='post-comments-container2'>
                    <div className='post-comments-list2'>
                        <div className='feed-comment-list'>
                            <ul >
                            {comms}
                            </ul>
                        </div>
                    </div>
                </div>
             

                    <div className='likes-comments-time'>
                    {/* <div className='post-show-time'>{this.props.post.created_at}</div> */}
                        <CommentContainer postId={this.props.post.id} username={this.props.currentUser} />
                    </div>

                    </div>
                </div>
            </div>


                <div className="dcm">
                    {this.renderDeleteNCancel()}
                <div>
            <Modal className="openModal" isOpen={this.state.modalOpen} onRequestClose={this.onModalClose} style={modalStyle}>
                {this.uploadForm}
            </Modal>
                </div>
                </div>
        </div>


        
    )}
}

export default withRouter(PostShow);


import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';


class PostShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            renderDeleteNCancel: false,
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.renderDeleteNCancel = this.renderDeleteNCancel.bind(this);
        this.toggleRenderState = this.toggleRenderState.bind(this);
    
    }


    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.comments.length !== this.props.comments.length)){
            // this.props.fetchPost(this.props.postId);
            this.props.fetchUser(this.props.userId);
        }
    }

    handleDelete() {
        this.props.deletePost(this.props.postId).then(
            () => this.props.closeModal());
    }

    renderDeleteNCancel(){
        let deleteModal ;
            if (this.state.renderDeleteNCancel) {
                deleteModal =
                <div className="dcm-1">
               ( <div className="delete-modal">
                    <div className="butts">
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
        this.setState({
            renderDeleteNCancel: (this.state.renderDeleteNCancel ? false : true)
        })
    }


    
    render(){
        debugger
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
                    <div className="comment-username">{this.props.username}</div>
                    <div className="comment">{comment.body} </div>
                </li>
            )
        })

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
                <div className="show-name">{this.props.username}</div>


                <div className="dots">
                    <button id="dot-btn"
                        onClick={this.toggleRenderState}>
                        <img src={window.dots} />
                    </button>
                </div>
            </header>

                    <div className="cap-header">
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
                        <CommentContainer postId={this.props.post.id} username={this.props.currentUser}/>
                    </div>

                    </div>
                </div>
            </div>



                <div className="dcm">
                    {this.renderDeleteNCancel()}
                </div>
            


        </div>
        
    )}
}

export default withRouter(PostShow);


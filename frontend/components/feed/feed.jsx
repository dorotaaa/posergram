import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';
import LikeContainer from '../likes/like_container';
import {timeSince} from '../../util/date_util';



class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.feedComms = this.feedComms.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.deleteComm = this.deleteComm.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.currentUserId);
    }

    handleDeleteComment(commentId) {
        return ((e) => {
            this.props.deleteComment(commentId)
        })
    }

   deleteComm(commentId) {
        return (
            <div className="delete-comm-butt">
                <button className="delete-comm-x" onClick={this.handleDeleteComment(commentId)}><i className="far fa-trash-alt"></i></button>
            </div>
        )
    } 

    feedComms(post) {

        
        if (post.comment_ids) {
            
        return ( 
            post.comment_ids.reverse().map(commentId=> {
          return (<div key={this.props.comments[commentId].id} className='feed-comment-list2'>
               <ul>
                   <li className="feed-comment-li" key={this.props.comments[commentId].id}>
                        <div>
                       <Link to={`/users/${this.props.comments[commentId].user_id}`}>
                       <span className='post-username2'>{this.props.users[this.props.comments[commentId].user_id].username}</span>
                       </Link>
                       <span className='post-caption-feed'>{this.props.comments[commentId].body}</span>
                        </div>
                      {(this.props.currentUserId === this.props.comments[commentId].user_id) ? this.deleteComm(this.props.comments[commentId].id) : ""}   
                   </li>
               </ul>
           </div>)
       }))} else {
           return (
               <div>yo</div>
            )
       }
    }

     

    render() {


        
        if (this.props.posts === undefined) {
            return (
                <div></div>
            )
        } else {
        
        return (
            <div>
                <div className='feed-container'>
                    <div className='feed-index'>
                        {this.props.posts.map(post => {
                            const likers = post.liker_ids ? post.liker_ids : '';
                            let numLikes;
                             if (likers.length === 1) {
                                 numLikes = "like";
                             } else {
                                 numLikes = "likes";
                             }
                             const timestamp = timeSince(post.created_at);
                            return (
        
                                <div key={post.id} className='feed-post' tabIndex="0">
                                    <div className='header-post-bar'>
                                        <div className='canvas'><Link to={`/users/${post.user_id}`}><img className='post-prof-pic' src={this.props.users[post.user_id].photoUrl} /> </Link></div>
                                        <div><h2 className='post-feed-username'><Link to={`/users/${post.user_id}`}>{this.props.users[post.user_id].username}</Link></h2></div>

                                    </div>

                                    <img className='post-index-img' src={post.photo} />
                                    <div className='likes-and-comments'>
                                        <section className='post-like-container'>
                                            <LikeContainer likes={likers} postId={post.id} />
                                            <div className='post-show-likes'>{likers.length} {numLikes}</div>
                                        </section>

                                        <div className='post-caption-span'>
                                            <Link to={`/users/${post.user_id}`}><div className='post-cap-username'>{this.props.users[post.user_id].username} </div></Link>
                                            <div className='post-caption-feed'>{post.caption}</div>
                                        </div>

                                        <div className='post-comments-container'>
                                            <div className='post-comments-list'>
                                                {this.feedComms(post)}
                                            </div>
                                            <div className="timestamp">{timestamp}</div>
                                            <CommentContainer postId={post.id}/>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
    }
}

export default withRouter(Feed); 



import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';
import LikeContainer from '../likes/like_container';



class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.feedComms = this.feedComms.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchPosts(this.props.currentUserId);
    }

    feedComms(post) {
        // debugger
        if (post.comment_ids) {
            // debugger
        return ( 
            post.comment_ids.map(commentId=> {
          return (<div key={this.props.comments[commentId].id} className='feed-comment-list2'>
               <ul>
                   <li key={this.props.comments[commentId].id}>
                       <Link to={`/users/${this.props.comments[commentId].user_id}`}><span className='post-username2'>{this.props.comments[commentId].user_id} </span></Link>
                       <span className='post-caption-feed'>{this.props.comments[commentId].body}</span>
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
        // debugger
        if (this.props.posts === undefined) {
            return (
                <div></div>
            )
        } else {
        // debugger
        return (
            <div>
                <div className='feed-container'>
                    <div className='feed-index'>
                        {this.props.posts.map(post => {
                            const likers = post.liker_ids ? post.liker_ids : '';
                            // debugger
                            return (
        
                                <div key={post.id} className='feed-post' tabIndex="0">
                                    <div className='header-post-bar'>
                                        <div className='canvas'><Link to={`/users/${post.user_id}`}><img className='post-prof-pic' src={this.props.currentUser.photoUrl} /> </Link></div>
                                        <div><h2 className='post-feed-username'><Link to={`/users/${post.user_id}`}>{post.username}</Link></h2></div>

                                    </div>

                                    <img className='post-index-img' src={post.photo} />
                                    <div className='likes-and-comments'>
                                        <section className='post-like-container'>
                                            <LikeContainer likes={likers} postId={post.id} />
                                            <div className='post-show-likes'>{likers.length} likes</div>
                                        </section>

                                        <div className='post-caption-span'>
                                            <Link to={`/users/${post.user_id}`}><div className='post-cap-username'>{post.username} </div></Link>
                                            <div className='post-caption-feed'>{post.caption}</div>
                                        </div>

                                        <div className='post-comments-container'>
                                            <div className='post-comments-list'>
                                                {this.feedComms(post)}
                                            </div>
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



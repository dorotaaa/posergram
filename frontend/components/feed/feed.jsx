import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';
import LikeContainer from '../likes/like_container';


class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchPosts(this.props.currentUserId);
        // this.props.fetchUser(this.props.currentUserId);
    }


    // postComments(post) {
    //     debugger
    //     if (post.comments) {
    //         return (
    //             post.comments.map(comment => {
    //                 debugger
    //                 return (
    //                     <div key={comment.id} className='feed-comment-list'>
    //                         <ul key={comment.id}>
    //                             <li key={comment.id}>
    //                                 <Link to={`/users/${comment.user_id}`}><span className='post-username2'>{comment.username} </span></Link>
    //                                 <span className='post-caption-feed'>{comment.body}</span>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 )

    //             })
    //         )
    //     } else {
    //         return (
    //             <div></div>
    //         )
    //     }
    // }


    render() {
        debugger
        if (this.props.posts === undefined) {
            return (
                <div></div>
            )
        } else {
        debugger
        return (
            <div>
                <div className='feed-container'>
                    <div className='feed-index'>
                        {this.props.posts.map(post => {
                            const likers = post.liker_ids ? post.liker_ids : '';
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

                                        {/* <div className='post-comments-container'>
                                            <div className='post-comments-list'>{this.postComments(post)}</div>
                                            <div className='post-feed-time'>{post.created_at}</div>
                                            <CommentContainer postId={post.id} />
                                        </div> */}
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



import React from 'react';
import { withRouter } from 'react-router-dom';


class Like extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger
        if (this.props.likerIds.length > 0 && this.props.pastLikes) {
            return (
                <div className='post-show-like'>
                    <button onClick={() => this.props.deleteLike(this.props.postId)} className="full-heart"><i className="far fa-heart"></i></button>
                </div>
            );
        } else {
            return (
                <div className='post-show-like'>
                    <button onClick={() => this.props.createLike({ post_id: this.props.postId })} className="empty-heart"><i className="fas fa-heart"></i></button>
                </div>
            )
        }
    }
};

export default withRouter(Like);

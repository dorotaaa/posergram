import React from 'react';
import { withRouter } from 'react-router-dom';


class Like extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.likerIds.length > 0 && this.props.pastLike) {
            return (
                <div className='post-show-like'>
                    <button onClick={() => this.props.deleteLike(this.props.postId)} className="full-heart">
                    <img src={window.redHeart}/>
                    </button>
                </div>
            );
        } else {
            return (
                <div className='post-show-like'>
                    <button onClick={() => this.props.createLike({ post_id: this.props.postId })} className="empty-heart">
                    <img src={window.heart}/>
                    </button>
                </div>
            )
        }
    }
};

export default withRouter(Like);

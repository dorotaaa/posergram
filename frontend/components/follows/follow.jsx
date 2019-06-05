import React from 'react';
import { withRouter } from 'react-router-dom';

class Follow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.currId);
    }

    render() {
        if (this.props.currentUser == undefined || this.props.currentUser.following_ids == undefined) {
            return (
                <div></div>
            )
        }
        if (this.props.currentUser.following_ids.includes(this.props.followingId)) {
            return (
                <div>
                    <button onClick={() => this.props.deleteFollow(this.props.followingId)} className='follow-button'>Following</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={() => this.props.createFollow({ user_id: this.props.followingId })} className='follow-button'>Follow</button>
                </div>
            )
        }
    }
};

export default withRouter(Follow);
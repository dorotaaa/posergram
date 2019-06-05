import React from 'react';
import { withRouter } from 'react-router-dom';

class Follow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId);
    }

    render() {
        // if (this.props.currentUser === undefined || this.props.currentUser.followingIds == undefined) {
        //     return (
        //         <div></div>
        //     )
        // }
        if (this.props.currentUser.followingIds.includes(this.props.currentUserId)) {
            return (
                <div>
                    <button onClick={() => this.props.deleteFollow(this.props.currentUserId)} className='follow-button'>Following</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={() => this.props.createFollow(this.props.currentUserId)} className='follow-button'>Follow</button>
                </div>
            )
        }
    }
};

export default withRouter(Follow);
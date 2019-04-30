import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            body: this.props.body,
            user_id: this.props.userId,
            post_id: this.props.postId,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({comment: this.state})
    }


    render() {
        
        return (
            <div className='comment-creator-container'>
                <div className='create-comment-wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' className="create-post-comment" placeholder="Add a comment..." value={this.state.body} onChange={this.handleUpdate("body")} />
                        <input className='hidden-submit' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
};

export default withRouter(Comment);

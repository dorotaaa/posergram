import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            body: this.props.body,
            user_id: this.props.userId,
            post_id: this.props.postId,
            disabledOrNot: true,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }

    // componentDidMount(){
    //     this.props.fetchUsers()
    // }

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.target.value,
            disabledOrNot: false,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({comment: this.state})
        this.setState({
            body: "",
            user_id: this.props.userId,
            post_id: this.props.postId,
        })
    }


    render() {
        
        return (
            <div className='comment-creator-container'>
                <div className='create-comment-wrapper'>
                    <form className="comment-form" onSubmit={this.handleSubmit}  >
                        <input type='text' className="create-post-comment" placeholder="Add a comment..." value={this.state.body} onChange={this.handleUpdate("body")} />
                        <input className='hidden-submit' type="submit" value="Post" disabled={this.state.disabledOrNot} />
                    </form>
                </div>
            </div>
        );
    }
};

export default withRouter(Comment);

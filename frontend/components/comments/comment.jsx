import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.comment);

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
        this.props.action(this.state)
            .then(() => this.setState({ body: '' }));
    }


    render() {
        debugger
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

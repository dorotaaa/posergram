import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class PostShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }
    
    render(){

        return(
            <>
            <div className='post-show-container'>
                <div className='post-show-photo-container'>
                    <div><img className='post-show-image' src={this.props.post.photo} /></div>

                            </div>
            </div>
            </>
    )}
}

export default withRouter(PostShow);
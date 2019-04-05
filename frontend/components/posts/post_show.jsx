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
            
        <div className="big-wrapper">

            <div className='close-button-wrp'>
            <button onClick={this.props.history.goBack} 
                    className='close-button'>×</button>
            </div>

            <div className='post-show-container'>

                <div className='post-show-photo-container'>
                    <div className="psp">
                    <img className='post-show-image' 
                        src={this.props.post.photo} />
                    </div>

                    <div className="header-div">
                    <header className="post-header">
                        <div>{this.props.username}</div>
                    </header>
                    <div className="cap-header">
                        <h2 className="caption-u-div">{this.props.username}</h2>
        
                        <div className="caption-div">{this.props.post.caption}</div>
                    </div>
                    </div>
                </div>


            </div>
        </div>

    )}
}

export default withRouter(PostShow);


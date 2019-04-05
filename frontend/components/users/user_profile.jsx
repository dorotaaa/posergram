import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        // debugger
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user.id !== this.props.user.id) {
            this.props.fetchUser(this.props.user.id)
        }
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id);
        this.props.fetchPosts(this.props.user.id);
    }

    handleLogout() {
        this.props.logout()
        // .then(() => this.props.history.push('/signup'))
    }



    render() {

        let user;
        if (!this.props.user) {
            user = { username: "", fullname: "", bio: "" };
        } else {
            user = this.props.user;
        }

        
        this.posts = this.props.posts.map(post => {
            // debugger
            return (
               
                <li key={`post-${post.id}`} className="post-li">
                    <Link to={`/users/${user.id}/posts/${post.id}`}>
                    <img
                        className="photo"
                        src={post.photo}/>
                    </Link>
                </li>
        
            )
            
        })

        let reversePosts = this.posts.reverse();

        return (
        
        <div className='main-profile-div'>

            <header className='profile-header'>
                    
                <div className="another-one">
                    <div className='prof-pic-div'>
                        <div className='photo-upload-button'></div>
                        <img className='prof-pic photo-dum' src={window.profPhoto}/>
                        </div>
                </div>

            <div className='info-container'>
                <section className='info-section'>
            
                <div className='name-div'>
                    <h1 className="username">{user.username}</h1>
                        <div>
                        <button className='edit-button'>
                        <Link to="/edit">
                            Edit Profile</Link></button>
                        </div>
                <div><button onClick={() => this.handleLogout()} className='fob-button'><img src={window.fob} alt="Logout"/></button></div>
                </div>


                <ul className='stats'>
                    <li className='stat'><span className='number'></span> posts</li>
                    <li className='stat'><span className='number'></span> followers</li>
                    <li className='stat'><span className='number'></span> following</li>
                </ul>

                    <div className='name-n-bio'>
                        <div className="nameo">
                        <h1 className='fullname'>{user.fullname}</h1>
                        </div>
                        <span className='user-bio'>{user.bio}</span>
                    </div>
                </section>
                </div>
            </header> 

            <div className="post-divider"></div>
                <div className="posts">
                <ul className="profile-posts">
                    {reversePosts}
                </ul>
            </div>

        </div> 
    )}
}

export default withRouter(UserProfile);




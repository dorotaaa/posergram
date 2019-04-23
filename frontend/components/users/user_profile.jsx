import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PostShowContainer from '../posts/post_show_container';
import { timingSafeEqual } from 'crypto';

class UserProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            showId: 0,
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.user.id !== this.props.user.id) || (prevProps.posts.length !== this.props.posts.length)){
            this.props.fetchUser(this.props.user.id)
        }
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id);
        this.props.fetchPosts(this.props.userId);
    }

    handleLogout() {
        
        this.props.logout().then(() => this.props.history.push("/signup"))
    }


    openModal(e) {
        this.setState({
            showId: e.currentTarget.dataset.id,
            showModal: !this.state.showModal});        
    }

    closeModal(e) {
        this.setState({
            showModal: !this.state.showModal
        }); 
    }
    render() {
        let user;
        if (!this.props.user) {
            user = { username: "", fullname: "", bio: "" };
        } else {
            user = this.props.user;
        }

       

        const modal = this.state.showModal ? (
            <PostShowContainer closeModal={this.closeModal} user={this.props.user} photoId={this.state.showId}/>
        ) : null;


            debugger
        const posts = this.props.posts.map((post, idx) => {
    
            // <Link id="post-modal" to={`/users/${user.id}/posts/${post.id}`}>
            // </Link>
            return (
                
                <li onClick={this.openModal} data-id={post.id} key={idx} className="post-li"> 
                
                    <img
                        className="photo"
                        src={post.photo}/>
                        <div className="img-div"></div>
                </li>
                
            )
            
        })

        const reversePosts = posts.reverse();

        return (
        
        
            <div className="show-modal-div">
                {modal}
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
                    <li className='stat'><span className='number'></span>{reversePosts.length} posts</li>
                    <li className='stat'><span className='number'></span>0 followers</li>
                    <li className='stat'><span className='number'></span>0 following</li>
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
                <div className="profile-posts">
                    {reversePosts}
                </div>
            </div>

        </div> 
            </div>
    )}
}

export default withRouter(UserProfile);




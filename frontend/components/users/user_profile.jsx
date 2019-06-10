import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PostShowContainer from '../posts/post_show_container';
import Footer from '../footer/footer';


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
        this.follow = this.follow.bind(this);
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.match.params.userId !== (this.props.match.params.userId)) 
            || (prevProps.posts.length !== this.props.posts.length)) {
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchPosts(this.props.match.params.userId);
        }
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId);
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

    follow() {
        debugger
        if (this.props.currentUser.following_ids.includes(this.props.followingId)) {
            return (
                <div>
                    <button onClick={() => this.props.deleteFollow(this.props.followingId)} className='following-button'>Following</button>
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

    render() {
        let user;
        if (!this.props.user) {
            user = { username: "", fullname: "", bio: ""};
        } else {
            user = this.props.user;
        }

          
        const modal = this.state.showModal ? (
            <PostShowContainer profile={this} closeModal={this.closeModal} user={this.props.user} photoId={this.state.showId}/>
        ) : null;

        
        let editButton = ((this.props.currentUserId.toString()) === (this.props.match.params.userId)) ? (
            <>
            <div>
            <button className='edit-button'>
                <Link to="/edit">Edit Profile</Link></button>
            </div>
        <div><button onClick={() => this.handleLogout()} className='fob-button'><img src={window.fob} alt="Logout" /></button></div></>)
         : (<div>{this.follow()}</div>)



            
        const posts = this.props.posts.map((post, idx) => {
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
        
            <>
            <div className="show-modal-div">
                {this.state.showModal ? modal : null}
        <div className='main-profile-div'>

            <header className='profile-header'>

                <div className="another-one">
                    <div className='prof-pic-div'>
                        <div className='photo-upload-button'></div>
                        <img className='prof-pic photo-dum' src={user.photoUrl} />
                    </div>
                </div>
            

            <div className='info-container'>
                <section className='info-section'>
            
                <div className='name-div'>
                    <h1 className="username">{user.username}</h1>
                        {/* <div>
                        <button className='edit-button'>
                        <Link to="/edit">
                            Edit Profile</Link></button>
                        </div>
                    <div><button onClick={() => this.handleLogout()} className='fob-button'><img src={window.fob} alt="Logout"/></button></div> */}
                    {editButton}
                </div>


                <ul className='stats'>
                    <li className='stat'><span className='number'></span>{reversePosts.length} posts</li>
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
                <div className="profile-posts">
                    {reversePosts}
                </div>
            </div>

        </div> 
            </div>
            <footer className="footer-container">
                <Footer />
            </footer>
            </>
    )}
}

export default withRouter(UserProfile);




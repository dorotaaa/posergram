import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProfile extends React.Component{
    constructor(props){
        super(props);

    this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            this.props.fetchUser(this.props.user.id)
        }
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id)
    }

    handleLogout() {
        this.props.logout()
        // .then(() => this.props.history.push('/signup'))
    }

    render(){
        let user;
        if (!this.props.user) {
            user = {username: "", fullname: "", bio: ""};
        } else {
            user = this.props.user;
        }

        return(
        
        <div className='main-profile-div'>

            <header className='profile-header'>
                    
                    <div className="another-one">
                    <div className='prof-pic-div'>
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
                <div><button onClick={() => this.handleLogout()} className='fob-button'><img src={window.fob} alt="Settings"/></button></div>
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
                <div className='posts-block'></div>
                <div className='posts-container'></div>
                <div className='all-posts'></div>
        </div> 
    )}
}

export default withRouter(UserProfile);




import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            this.props.fetchUser(this.props.id)
        }
    }

    render(){

        return(
        <>
        <div className="main-profile-div">
            <header className="profile-header">

                <div className="prof-pic-div">
                    <div className="prof-pic-sq">
                        <div className="prof-pic">
                            <button className="photo-butt">
                                    <img className="photo-dum" src={window.profPhoto} alt="Add a profile photo"/>
                            </button>
                        </div>
                    </div>
                </div>

                <section className="info-section">
                    <div className="name-div">
                            <h1 className="username">{this.props.user.username}</h1>
                        <Link className="edit-link" to="/edit">
                        <button className="edit-butt">Edit Profile
                        </button>
                        </Link>
                    </div>
                    <div className="fob">
                        <button className="set-fob">
                            <span>
                            </span>
                        </button>
                    </div>

                    <ul className="count-bar">
                        <li className="post-count">Posts</li>
                        <li className="followers">Followers</li>
                        <li className="following">Following</li>
                    </ul>

                <div className="bio-div">
                    <span className="bio">{this.props.user.bio}</span>
                </div>
                </section>



            </header>
        </div>
        </>

        )}

}

export default withRouter(UserProfile);
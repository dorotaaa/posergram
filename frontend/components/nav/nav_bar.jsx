import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadPostContainer from '../users/upload_post_container';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow.bind(this);
    }

    handleShow(){
        
    }

    render(){

    return (
        <nav className="main-nav">

                        <div className="left-nav">
                            <div className="nav-bar-logo">
                                <Link id="nav-cam" to="/">
                                    <img src={window.camBar} />
                                </Link>

                                <Link id="nav-logo" to="/">
                                    <img src={window.pgLogo} />
                                </Link>
                            </div>
                        </div>

                        <div className="search-bar">
                            <input type="text"
                                placeholder="search"
                                className="search-input" />
                        </div>

                        <div className="right-nav">
                            <div className="right">
                                {/* <div className="explore-logo"> */}
                                    <a href="https://www.google.com/">
                                        <img src={window.discover} />
                                    </a>
                                {/* </div> */}

                        <button onClick={this.handleShow}>
                        <div className="heart-not">
                                <UploadPostContainer/> 
                            <img className="heart" src={window.heart} />
                        </div>
                        </button>
                            

                                {/* <div className="profile-logo"> */}
                                    <Link to="/profile">
                                        <img src={window.person} />
                                    </Link>
                                {/* </div> */}
                            </div>
                        </div>
        </nav>
    )}
}


export default withRouter(NavBar);
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

    this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout().then(() => this.props.history.push('/signup'))
    }

    render(){
           return (

        <nav className="main-nav">
        <div className="subnav-div">
            <div className="nav-bar">
                <div className="mini-nav">
                
                <div className="left-nav">
                    <div className="nav-bar-logo">
                            <Link id="nav-cam"to="/signup">
                                <img  src={window.camBar}/>
                            </Link>
                    
                        <Link id="nav-logo" to="/signup">
                            <img src={window.pgLogo} />
                            </Link>
                    </div>
                </div>

                    <div className="search-bar">
                        <input type="text"
                            placeholder="search"
                            className="search-input"/>
                    </div>

                    <div className="right-nav">
                            <div className="right">
                                <div className="explore-logo">
                                    <a href="https://www.google.com/">
                                    <img src={window.discover}/>
                                    </a>
                                </div>

                                <div className="heart-not">
                                    <button onClick={() => this.handleLogout()}>
                                    <img src={window.heart}/>
                                    </button>
                                </div>

                                <div className="profile-logo">
                                    <Link to="/profile">
                                    <img src={window.person}/>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    )}
}


export default withRouter(NavBar);
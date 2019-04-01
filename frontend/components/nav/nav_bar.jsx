import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
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

                                {/* <div className="heart-not"> */}
                                    <button className="heart">
                                        <img src={window.heart} />
                                    </button>
                                {/* </div> */}

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
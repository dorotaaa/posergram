import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadPostContainer from '../users/upload_post_container';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow.bind(this);
    }

    handleShow(e){
        
        $(".upload-div").css("visibility", "visible");
        
    }

    render(){

    return (
        <nav className="main-nav">

            
                <div className="nav-bar-logo">
                    <Link id="nav-cam" to="/">
                        <img src={window.camBar} />
                    </Link>

                    <Link id="nav-logo" to="/">
                        <img src={window.logo} />
                    </Link>
                </div>
          
            <div className="search-bar">
                <input type="text"
                    placeholder="search"
                    className="search-input" />
            </div>

                 <div className="right-nav">
                    
                       <div className="explore-logo">
                                    <a href="https://www.google.com/">
                        <img className="explore" src={window.discover} />
                                    </a>
                        </div>

                        <div className="heart-not">
                        <button className="heart" onClick={() => this.handleShow()}>     
                            <img className="hpic" src={window.heart} />
                        </button>
                            <UploadPostContainer />
                        </div>
                            

                         <div className="per">
                            <Link to="/profile">
                        <img className="person" src={window.person} />
                            </Link>
                        </div>
                </div>
            </nav>
    )}
}


export default withRouter(NavBar);
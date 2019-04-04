import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadPostContainer from '../users/upload_post_container';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showUploadForm: false,
        }
        
       this.showUploadForm = this.showUploadForm.bind(this);
       this.closeUploadForm = this.closeUploadForm.bind(this);
    }

    // handleShow(e){
        
    //     $(".upload-div").css("visibility", "visible");
        
    // }

    showUploadForm(){
        // debugger
        // e.preventDefault();
        
        this.setState({showUploadForm: true})
    }
    
    closeUploadForm(){
        this.setState({ showUploadForm: false}, () => {
            document.removeEventListener("click", this.closeUploadForm)});
    }


    render(){

            if (this.state.showUploadForm){
                this.uploadForm = <UploadPostContainer closeUploadForm={this.closeUploadForm}/>
            } else {
                this.uploadForm = null;
            }
    

    return (
        <nav className="main-nav">

            
                <div className="nav-bar-logo">
                    <Link id="nav-cam" to="/">
                        <img src={window.camBar} />
                    </Link>

                    <Link id="nav-logo" to="/">
                    <img className="nav-logo" src={window.logo} />
                    </Link>
                </div>
          
            <div className="search-bar">
                <input type="text"
                    placeholder="search"
                    className="search-input" />
            </div>

                 <div className="right-nav">
                    
                       <div className="explore-logo">
                                    <a href="https://www.google.com/" alt="Discover">
                        <img className="explore" src={window.discover} />
                                    </a>
                        </div>

                        <div className="dropdown">
                        <button className="heart" onClick={() => this.showUploadForm()}>     
                            <img className="hpic" src={window.heart}  />
                        </button>
                            {this.uploadForm}
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
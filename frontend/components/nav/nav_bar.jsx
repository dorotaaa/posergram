import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadPostContainer from '../users/upload_post_container';
import Modal from 'react-modal';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            displayExplore: "hide-explore",
            displaySite: "hide-sites",
            search: "",
            searchVisibility: "search-users-container",
        };

        this.handleModalClick = this.handleModalClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCompassClick = this.handleCompassClick.bind(this);
        this.handleHeartClick = this.handleHeartClick.bind(this);
        this.showExplore = this.showExplore.bind(this);
        this.hideExplore = this.hideExplore.bind(this);
        this.showSites = this.showSites.bind(this);
        this.hideSites = this.hideSites.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.showUploadForm = this.showUploadForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleChange(field) {
        return event => {
            this.setState({ [field]: event.target.value });
        };
    }

    handleModalClick() {
        this.setState({ modalOpen: true });
    }

    onModalClose() {
        this.setState({ modalOpen: false });
    }

    handleCompassClick(event) {
        alert("This is under development!");
    }

    handleHeartClick(event) {
        alert("This is under development!");
    }

    showExplore() {
        this.setState({ displayExplore: "show-explore" });
    }

    hideExplore() {
        this.setState({ displayExplore: "hide-explore" });
    }

    showSites() {
        this.setState({ displaySite: "show-sites" });
    }

    hideSites() {
        this.setState({ displaySite: "hide-sites" });
    }

    handleSearchChange(event) {
        this.setState({ search: event.currentTarget.value });
    }

    clearSearch() {
        this.setState({ search: "" });
    }

    showUploadForm() {
        this.setState({ showUploadForm: true })
    }



    render() {

        if (this.state.showUploadForm) {
            this.uploadForm = <UploadPostContainer/>
        } else {
            this.uploadForm = null;
        }


        let searchDropdown = "hide-search-dropdown";
        let searchDropdownSquare = "search-dropdown-square-hide";

        const searchDivs = Object.values(this.props.fetchUsers).map((user, index) => {
            if (user.username.toLowerCase().includes(this.state.search) && this.state.search !== "") {
                searchDropdown = "search-dropdown";
                searchDropdownSquare = "search-dropdown-square";
                return (
                    <div key={`search-dropdown-${index}`} className="search-users-component">
                        <div className={this.state.searchVisibility}>


                            <div>
                                <div className="search-users-username">
                                    <Link to={`/users/${user.id}`} onClick={this.clearSearch}>{user.username}</Link>
                                </div>

                                <div className="search-users-name">
                                    {user.fullName}
                                </div>
                            </div>

                        </div>
                    </div>
                )


            }
        });

        let navbarHeart = "navbar-heart";

        let activityOnPosts = "activity-on-posts";

        let navbar;
        if (this.props.currentUser) {
            navbar = (
                <div id="navbar-cont" className="navbar-container">
                    <div id="navbar" className="navbar">

                        <div className="navbar-polygram-logo">
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                                <div id="nav-div" className="navbar-divider"></div>
                                <span id="nav-logo" className="navbar-logo">Posergram</span>
                            </a>
                        </div>

                        <div className="navbar-search-bar">
                            <input type="search" placeholder="Search" onChange={this.handleSearchChange} value={this.state.search} />
                            <div className={searchDropdownSquare}></div>
                            <div className={searchDropdown}>
                                {searchDivs}
                            </div>
                        </div>

                        <div className="navbar-icons">

        
                            <div onClick={this.handleModalClick} onMouseEnter={this.showUpload} onMouseLeave={this.hideUpload} >
                            <img className="navbar-icons-plus" src={window.upload} alt="plus"/> 
                                {/* <img className="navbar-icons-compass" src={window.discover} alt="compass" />
                                <button className="heart" onClick={() => this.showUploadForm()}>
                                </button> */}
                                {this.uploadForm}
                            </div>

                            <div className="navbar-compass" onMouseEnter={this.showExplore} onMouseLeave={this.hideExplore} >
                                <img className="navbar-icons-compass" src={window.discover} alt="compass" />
                                <div>
                                    <div className="compass-heart-spacer"></div>
                                    <a className={this.state.displayExplore} href="http://www.google.com/" target="_blank">Discover</a>
                                </div>
                            </div>

                            <div className={navbarHeart} onMouseEnter={this.showSites} onMouseLeave={this.hideSites} >
                                <img className="navbar-icons-heart" src={window.heart} alt="heart" />
                                <div>
                                    <div className="compass-heart-spacer"></div>
                                </div>
                            </div>
                            <div className="navbar-user"><Link to={`/users/${this.props.currentUser}`}>{<img className="navbar-icons-user" src={window.person} alt="user" />}</Link></div>
                        </div>

                    </div>
                </div>
            )
        }


        const modalStyle = {
            overlay: {
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999999,
            },
            content: {
                margin: "auto",
                padding: 0,
                margin: 0,
                border: 0,
                borderRadius: "8px",
                animation: "postFormModal 0.7s linear",
            }
        }

        return (
            <div>
                {navbar}

                <div className="navbar-heart-pop-up" >
                    <div className="triangle"></div>
                    <div className={activityOnPosts}>
                        <div>Heart</div>
                        <div>Activity On Your Posts</div>
                        <div>When someone likes or comments on one of your posts, you'll see it here.</div>
                    </div>
                </div>

                <Modal isOpen={this.state.modalOpen} onRequestClose={this.onModalClose} style={modalStyle}>
                    {this.uploadForm}
                </Modal>
            </div>
        )
    }
}


export default withRouter(NavBar);



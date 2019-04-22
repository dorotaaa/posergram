import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadPostContainer from '../users/upload_post_container';
import Modal from 'react-modal';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            displayUpload: "hide-upload",
            showUploadForm: false,
            search: "",
            searchVisibility: "search-users-container",
        };

        this.handleModalClick = this.handleModalClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.showUpload = this.showUpload.bind(this);
        this.hideUpload = this.hideUpload.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        // this.showUploadForm = this.showUploadForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        Modal.setAppElement('body');
    
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

    showUpload() {
        this.setState({ displayUpload: "show-upload" });
    }

    hideUpload() {
        this.setState({ displayUpload: "hide-upload" });
    }

    handleSearchChange(event) {
        this.setState({ search: event.currentTarget.value });
    }

    clearSearch() {
        this.setState({ search: "" });
    }

    // showUploadForm() {
    //     this.setState({ showUploadForm: true })
    // }



    render() {

        if (this.state.modalOpen) {
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

        let navbar;
        if (this.props.currentUser) {
            navbar = (
                <div id="navbar-cont" className="navbar-container">
                    <div id="navbar" className="navbar">

                        <div className="navbar-posergram-logo">
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                                <div id="nav-div" className="navbar-divider"></div>
                                <span id="nav-logo" className="navbar-logo">{<img src={window.logo}/>}</span>
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
                        <div className="navbar-compass">
                            <a href="http://www.google.com/">{<img className="navbar-icons-user" src={window.discover} alt="user" />}</a>
                        </div>

                        <div className="navbar-heart" onMouseEnter={this.showUpload} onMouseLeave={this.hideUpload} >
                            <img className="navbar-icons-heart" src={window.heart} alt="heart" />
                        <div><div className="heart-spacer"></div>
                                <button onClick={this.handleModalClick} target="_blank">Upload Post</button>
                        </div>
                        </div>
                        <div className="navbar-user">
                            <Link to={`/users/${this.props.currentUser}`}>{<img className="navbar-icons-user" src={window.person} alt="user" />}</Link>
                        </div>
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
            }
        }

        return (
            <div>
                {navbar}

                <Modal className="openModal" isOpen={this.state.modalOpen} onRequestClose={this.onModalClose} style={modalStyle}>
                    {this.uploadForm}
                </Modal>
            </div>
        )
    }
}


export default withRouter(NavBar);



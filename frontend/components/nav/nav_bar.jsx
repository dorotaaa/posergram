import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadPostContainer from '../users/upload_post_container';
import { browserHistory } from 'react-router';
import Modal from 'react-modal';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            displayUpload: "hide-upload",
            showUploadForm: false,
            search: "",
            users: [],
        };

        this.handleModalClick = this.handleModalClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.showUpload = this.showUpload.bind(this);
        this.hideUpload = this.hideUpload.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers();
        Modal.setAppElement('body');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                search: '',
                users: []
            });
        }
    }

    handleUpdate(field) {
        return e => {
            let filtered = this.props.users.filter(user => user.username.includes(e.target.value));
            if (e.target.value === '') {
                filtered = [];
            }
            this.setState({

                [field]: e.target.value,
                users: filtered
            });
        };
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


    render() {
        // debugger
        if (this.state.modalOpen) {
            this.uploadForm = <UploadPostContainer/>
        } else {
            this.uploadForm = null;
        }


        let searchBar = (
            <div className='search-bar'>
                <input
                    className='search-input'
                    type="text"
                    onChange={this.handleUpdate('search')}
                    value={this.state.search}
                    placeholder="Search"
                />

                <ul className="searchBar-ul">
                    {this.state.users.map(user => {
                        // debugger
                        return (
                            <Link key={user.id} to={`/users/${user.id}`}>
                                <li className="search-dropdown" key={user.id}>
                                    <div className='search-dropdown-square'>
                                        <div className='search-photo'>
                                            <img src={user.photoUrl} />
                                        <div className='search-info'>
                                            <div className='search-username'>{user.username}</div>
                                            <div className='search-fullname'>{user.fullname}</div>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        );

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
                            {searchBar}
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



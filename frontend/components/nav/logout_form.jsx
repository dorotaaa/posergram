import React from 'react';
import { Link } from 'react-router-dom';

const LogoutForm = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="container">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const greeting = () => (
            <div>
            <button onClick={logout}>Log Out</button>
            </div>
    );

    return currentUser ? greeting() : sessionLinks();
};

export default LogoutForm;
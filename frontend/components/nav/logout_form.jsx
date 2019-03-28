import React from 'react';
import { Link } from 'react-router-dom';

const LogoutForm = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="container">
        <h3>Posergram</h3>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const greeting = () => (
            <div>
            <h2>Hi, {currentUser.username}!</h2>
            <button onClick={logout}>Log Out</button>
            </div>
    );

    return currentUser ? greeting() : sessionLinks();
};

export default LogoutForm;
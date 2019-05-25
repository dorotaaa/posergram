import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, currentUser}) => (
    <Route path={path} exact={exact} render={(props) => 
     {
        return (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/feed"/>
            )
        )}} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/signup"/>
            )
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUser), currentUser: state.session.currentUser };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));








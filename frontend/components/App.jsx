import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LogoutContainer from './nav/logout_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

const App = () => (
        <div>
            <div className="app-div">
            <LogoutContainer />
            <Switch>
                <AuthRoute exact path="/signup" component={SignupContainer} />
                <AuthRoute exact path="/login" component={LoginContainer} />
            </Switch>
        </div>
    </div>
);

export default App;
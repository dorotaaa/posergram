import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect} from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import UserProfileContainer from './users/user_profile_container';
import EditUserContainer from './users/edit_user_container';


const App = () => (
        <div>
            <div className="app-div">

            <Switch>
                <Redirect exact from="/" to="/signup"/>
                <AuthRoute exact path="/signup" component={SignupContainer} /> 
                <AuthRoute exact path="/login" component={LoginContainer} />
                <Route path="/" component={NavBarContainer} />
            </Switch>

            <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
            <ProtectedRoute path="/edit" component={EditUserContainer} />
           
        </div>
    </div>
);

export default App;
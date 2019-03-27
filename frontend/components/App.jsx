import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

const App = () => (
        <div>
            <h1>hello?</h1>
            <Switch>
                <Route path="/signup" component={SignupContainer} />
                <Route path="/login" component={LoginContainer} />
            </Switch>
        </div>
);

export default App;
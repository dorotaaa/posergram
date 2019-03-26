import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/Root';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    //testing
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    //testing 

    // ReactDOM.render(<Root store={store}/>, root);
    ReactDOM.render(<Root store={store} />, root)
});

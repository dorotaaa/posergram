import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let preloadedState = undefined; // creates a variable we can use
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser // assign currentUser here if present
            }
        };
    }
     const store = configureStore();
     window.store = store;
    
    ReactDOM.render(<Root store={store} />, root)
});

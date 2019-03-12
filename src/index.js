import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
ReactDOM.render(<HomeContainer/>, document.getElementById('app'));

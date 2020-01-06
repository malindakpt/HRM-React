import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';
// authProvider.js
// import {authProvider} from './AuthProvider';
// import AzureAD from 'react-aad-msal';
// import { AzureAD, AuthenticationState } from 'react-aad-msal';
 

ReactDOM.render(<App />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


import ***REMOVED*** MsalAuthProvider, LoginType ***REMOVED*** from 'react-aad-msal';

// authProvider.js
 

const cacheLocation: 'localStorage' = 'localStorage';
// Msal Configurations
const config = ***REMOVED***
  auth: ***REMOVED***
    clientId: '5c5a3fe4-7bf7-45a1-81dd-0e416a84358c', //This is your client ID
    authority: "https://login.microsoftonline.com/db0b4725-608f-4d84-b2e3-7fc15b0cb2d4", //This is your tenant info
    redirectURI: "http://localhost:3000/"
***REMOVED***
  cache: ***REMOVED***
    cacheLocation: cacheLocation,
    storeAuthStateInCookie: true
  ***REMOVED***
***REMOVED***;
 
// Authentication Parameters
const authenticationParameters = ***REMOVED***
  // scopes: [
  //   '<property (i.e. user.read)>',
  //   'https://<your-tenant-name>.onmicrosoft.com/<your-application-name>/<scope (i.e. demo.read)>'
  // ]
  scopes: ["user.read"]
***REMOVED***
 
// Options
const options = ***REMOVED***
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
***REMOVED***
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
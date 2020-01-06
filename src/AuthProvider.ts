
import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// authProvider.js
 

const cacheLocation: 'localStorage' = 'localStorage';
// Msal Configurations
const config = {
  auth: {
    clientId: '5c5a3fe4-7bf7-45a1-81dd-0e416a84358c', //This is your client ID
    authority: "https://login.microsoftonline.com/db0b4725-608f-4d84-b2e3-7fc15b0cb2d4", //This is your tenant info
    redirectURI: "http://localhost:3000/"
  },
  cache: {
    cacheLocation: cacheLocation,
    storeAuthStateInCookie: true
  }
};
 
// Authentication Parameters
const authenticationParameters = {
  // scopes: [
  //   '<property (i.e. user.read)>',
  //   'https://<your-tenant-name>.onmicrosoft.com/<your-application-name>/<scope (i.e. demo.read)>'
  // ]
  scopes: ["user.read"]
}
 
// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
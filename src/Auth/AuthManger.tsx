import * as React from 'react';
import { Component } from 'react';
import AzureAD, { AuthenticationState } from 'react-aad-msal';
import { authProvider } from '../AuthProvider';
import HomeComponent from '../Components/HomeComponent';

export class AuthManagerComponent extends  Component {
    render() {
        return <AzureAD provider={authProvider} forceLogin={true}>
        {
            (props: any) => {
              console.log(props);
              switch (props.authenticationState) {
                case AuthenticationState.Authenticated:
                  return (
                    <HomeComponent name = {props.accountInfo.account.name}/>
                    // <p>
                    //   <span>Welcome, {props.accountInfo.account.name}!</span>
                    //   <button onClick={props.logout}>Logout</button>
                    // </p>
                  );
                case AuthenticationState.Unauthenticated:
                  return (
                    <div>
                      {props.error && <p><span>An error occured during authentication, please try again!</span></p>}
                      <p>
                        <span>Hey stranger, you look new!</span>
                        <button onClick={props.login}>Login</button>
                      </p>
                    </div>
                  );
                case AuthenticationState.InProgress:
                  return (<p>Authenticating...</p>);
              }
            }
          }
        </AzureAD>;
    }
}
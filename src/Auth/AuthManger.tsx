import * as React from 'react';
import ***REMOVED*** Component ***REMOVED*** from 'react';
import AzureAD, ***REMOVED*** AuthenticationState ***REMOVED*** from 'react-aad-msal';
import ***REMOVED*** authProvider ***REMOVED*** from '../AuthProvider';
import HomeComponent from '../components/homeComponent';

export class AuthManagerComponent extends  Component ***REMOVED***
    render() ***REMOVED***
        return <AzureAD provider=***REMOVED***authProvider***REMOVED*** forceLogin=***REMOVED***true***REMOVED***>
        ***REMOVED***
            (props: any) => ***REMOVED***
              console.log(props);
              switch (props.authenticationState) ***REMOVED***
                case AuthenticationState.Authenticated:
                  return (
                    <HomeComponent name = ***REMOVED***props.accountInfo.account.name***REMOVED***/>
                    // <p>
                    //   <span>Welcome, ***REMOVED***props.accountInfo.account.name***REMOVED***!</span>
                    //   <button onClick=***REMOVED***props.logout***REMOVED***>Logout</button>
                    // </p>
                  );
                case AuthenticationState.Unauthenticated:
                  return (
                    <div>
                      ***REMOVED***props.error && <p><span>An error occured during authentication, please try again!</span></p>***REMOVED***
                      <p>
                        <span>Hey stranger, you look new!</span>
                        <button onClick=***REMOVED***props.login***REMOVED***>Login</button>
                      </p>
                    </div>
                  );
                case AuthenticationState.InProgress:
                  return (<p>Authenticating...</p>);
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        </AzureAD>;
    ***REMOVED***
***REMOVED***
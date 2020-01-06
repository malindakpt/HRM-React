import React from 'react';
import ***REMOVED*** AuthManagerComponent ***REMOVED*** from './Auth/AuthManger';
import AppContext from './Context/AppContext';
// import logo from './logo.svg';


const App: React.FC = () => ***REMOVED***
  return (
    <div className="App">
      <AppContext.Provider value=***REMOVED******REMOVED***isLoggedIn: false, name: 'Malinda'***REMOVED******REMOVED***>
      <AuthManagerComponent />
      </AppContext.Provider>
    </div>
  );
***REMOVED***

export default App;

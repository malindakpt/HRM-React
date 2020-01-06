import React from 'react';
import { AuthManagerComponent } from './Auth/AuthManger';
import AppContext from './Context/AppContext';
// import logo from './logo.svg';


const App: React.FC = () => {
  return (
    <div className="App">
      <AppContext.Provider value={{isLoggedIn: false, name: 'Malinda'}}>
      <AuthManagerComponent />
      </AppContext.Provider>
    </div>
  );
}

export default App;

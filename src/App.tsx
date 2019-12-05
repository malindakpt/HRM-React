import React from "react";
import "./App.scss";
import ***REMOVED*** BrowserRouter as Router, Route, Link, Switch ***REMOVED*** from "react-router-dom";
import LoginComponent from "./components/login/login.component";
import NavBarComponent from "./components/nav-bar/nav-bar.component";

const App: React.FC = () => ***REMOVED***
  return (
    <div className="App">
      <Router>
        <Route path="/" component=***REMOVED***NavBarComponent***REMOVED*** />
        <Route path="/login" component=***REMOVED***LoginComponent***REMOVED*** />
      </Router>
    </div>
  );
***REMOVED***;

export default App;

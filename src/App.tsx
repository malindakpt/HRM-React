import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginComponent from "./components/login/login.component";
import NavBarComponent from "./components/nav-bar/nav-bar.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBarComponent} />
        <Route path="/login" component={LoginComponent} />
      </Router>
    </div>
  );
};

export default App;

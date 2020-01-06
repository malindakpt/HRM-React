import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./App.css";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import UserComponent from "./Components/UserComponent";
import HeaderComponent from "./Components/HeaderComponent";

const routing = (
  <Router>
    <div>
      <Route path="/" component={HeaderComponent} />
      <Route path="/" component={HomeComponent} />
      <Route path="/" component={UserComponent} />
      <Route path="/b" component={HomeComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

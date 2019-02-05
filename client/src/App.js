import React, { Component } from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import AdminPanel from "./pages/AdminPanel";
import Register from "./pages/Register";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/users/:userId"} component={Profile} />
          <Route path={"/admin/:userId"} component={AdminPanel} />
          <Route path={"/register"} component={Register} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
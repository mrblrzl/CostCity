import React, { Component } from "react";
import "./index.css";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD

import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import LandingPage from './components/LandingPage';
import AdminPanel from "./pages/AdminPanel";
import SignupPage from "./pages/SignupPage";
=======
import Navbar from './components/Navbar';
import Routes from './routes';
>>>>>>> cf196917070649ba9bc3da1740ecac6844ce5788

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/users/:userId"} component={Profile} />
          <Route path={"/admin/:userId"} component={AdminPanel} />
          <Route path={"/signup"} component={SignupPage} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
=======
      <div>
        <Navbar /> 
        <Routes />
      </div>
      
>>>>>>> cf196917070649ba9bc3da1740ecac6844ce5788
    )
  }
}

export default App;
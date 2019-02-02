import {Route, withRouter, Switch} from 'react-router-dom';
import React from 'react';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import UserProfile from './components/UserProfile';

const Routes = props => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/profile" component={UserProfile} />
    </Switch>
  </div>
)


export default withRouter(Routes);


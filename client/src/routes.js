import {Route, withRouter, Switch} from 'react-router-dom';
import React from 'react';

import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import AdminPanel from "./pages/AdminPanel";
import Register from "./pages/Register";

const Routes = props => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/admin" component={AdminPanel} />
      <Route path="/register" component={Register} />
      <Route component={NotFound}/>
    </Switch>
  </div>
)

{/* <input type="submit">
<a href="/notes">See your notes!</a>
<a href="/user">See your profile!</a>
<a href="/populateduser">See your profile, populated with notes!</a> */}

export default withRouter(Routes);


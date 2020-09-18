import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from 'containers/PrivateRoute';

import Dashboard from './Dashboard';
import SignIn from './SignIn';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <SignIn />
      </Route>

      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;

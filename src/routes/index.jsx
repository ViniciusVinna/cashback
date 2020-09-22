import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from 'containers/PrivateRoute';

import Dashboard from './Dashboard';
import Signin from './Signin';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <Signin />
      </Route>

      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;

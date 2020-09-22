import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from 'containers/PrivateRoute';

import Dashboard from './Dashboard';
import Login from './Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact={true}>
      <Login />
    </Route>

    <PrivateRoute path="/dashboard">
      <Dashboard />
    </PrivateRoute>
  </Switch>
);

export default Routes;

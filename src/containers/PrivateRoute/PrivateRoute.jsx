import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const isLogged = true;

  if (isLogged) {
    return (
      <Route {...rest}>
        {children}
      </Route>
    );
  }

  return (<Redirect to="/signin" />);
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

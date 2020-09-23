import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const { isLogged, accessToken } = useSelector(state => state.user);

  if (!isLogged && !accessToken) {
    return (<Redirect to="/" />);
  }

  return (
    <Route {...rest}>
      {children}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

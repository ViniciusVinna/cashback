import React from 'react';
import Ink from 'react-ink';

const config = {
  background: true,
  duration: 1000,
  opacity: 0.05,
  radius: 150,
};

const Ripple = () => (<Ink {...config} data-testid="ripple" />);

export default Ripple;

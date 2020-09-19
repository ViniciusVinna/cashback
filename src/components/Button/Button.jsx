import React from 'react';
import Ink from 'react-ink';
import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.styles';

const {
  Default,
  Primary,
  Secondary,
} = ButtonStyled;

const Button = ({ children, variation, ...rest }) => {
  if (variation === 'primary') {
    return (
      <Primary type="button" {...rest}>
        {children}
        <Ink />
      </Primary>
    );
  }
  if (variation === 'secondary') {
    return (
      <Secondary type="button" {...rest}>
        {children}
        <Ink />
      </Secondary>
    );
  }
  if (variation === 'default') {
    return (
      <Default type="button" {...rest}>
        {children}
        <Ink />
      </Default>
    );
  }

  return (
    <button type="button">
      {children}
      <Ink />
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variation: PropTypes.string,
};

Button.defaultProps = {
  variation: 'default',
};

export default Button;

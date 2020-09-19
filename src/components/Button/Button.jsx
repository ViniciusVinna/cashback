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
      <Primary type="button" data-test-id="button" {...rest}>
        {children}
        <Ink />
      </Primary>
    );
  }
  if (variation === 'secondary') {
    return (
      <Secondary type="button" data-test-id="button" {...rest}>
        {children}
        <Ink />
      </Secondary>
    );
  }

  return (
    <Default type="button" data-test-id="button">
      {children}
      <Ink />
    </Default>
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

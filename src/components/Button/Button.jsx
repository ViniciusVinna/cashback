import React from 'react';
import PropTypes from 'prop-types';

import Ripple from 'components/Ripple';

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
        <Ripple />
      </Primary>
    );
  }
  if (variation === 'secondary') {
    return (
      <Secondary type="button" data-test-id="button" {...rest}>
        {children}
        <Ripple />
      </Secondary>
    );
  }

  return (
    <Default type="button" data-test-id="button" {...rest}>
      {children}
      <Ripple />
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

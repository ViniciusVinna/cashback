import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

import InputStyled from './Input.styled';

const { Submit } = InputStyled;

const SubmitField = ({ children, disabled, ...rest }) => (
  <Submit disabled={disabled} {...rest}>
    {children}
    <Ink />
  </Submit>
);

SubmitField.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

SubmitField.defaultProps = {
  disabled: false,
};

export default SubmitField;

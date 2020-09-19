import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { BiIdCard } from 'react-icons/bi';
import {
  FiLock,
  FiMail,
  FiUser,
} from 'react-icons/fi';

import InputStyled from './Input.styled';

const { Field, FieldGroup } = InputStyled;

const Input = forwardRef(({ name, ...rest }, ref) => {
  let iconOutput;

  if (name === 'username') {
    iconOutput = (<FiUser />);
  }
  else if (name === 'cpf') {
    iconOutput = (<BiIdCard />);
  }
  else if (name === 'email') {
    iconOutput = (<FiMail />);
  }
  else if (name === 'password') {
    iconOutput = (<FiLock />);
  }

  return (
    <FieldGroup>
      {iconOutput}
      <Field name={name} {...rest} ref={ref} />
    </FieldGroup>
  );
});

Input.propTypes = {
  name: PropTypes.string,
};

export default Input;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { BiIdCard } from 'react-icons/bi';
import {
  FiCalendar,
  FiDollarSign,
  FiLock,
  FiMail,
  FiTag,
  FiUser,
} from 'react-icons/fi';

import InputStyled from './Input.styled';

const { Field, FieldGroup } = InputStyled;

const Input = forwardRef(({ name, onChangeHandler, ...rest }, ref) => {
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
  else if (name === 'code') {
    iconOutput = (<FiTag />);
  }
  else if (name === 'date') {
    iconOutput = (<FiCalendar />);
  }
  else if (name === 'value') {
    iconOutput = (<FiDollarSign />);
  }

  return (
    <FieldGroup>
      {iconOutput}
      <Field
        name={name}
        onChange={onChangeHandler}
        ref={ref}
        {...rest}
      />
    </FieldGroup>
  );
});

Input.propTypes = {
  name: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

export default Input;

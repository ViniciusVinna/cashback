import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { getUser } from 'actions';

import { loginSchema } from 'modules/form-validations';

import { Input, SubmitField } from 'components/Input';

import StyledForm from './Forms.styled';

const { Error, Form, Label } = StyledForm;

export const LoginForm = () => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmitHandler = (data) => {
    dispatch(getUser(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} data-testid="login-form">
      <Label htmlFor="email">E-mail</Label>
      <Input
        hasError={!!errors.email}
        name="email"
        placeholder="digite seu email..."
        ref={register}
      />
      {!!errors.email && (<Error>{errors?.email?.message}</Error>)}

      <Label htmlFor="password">Senha</Label>
      <Input
        hasError={!!errors.password}
        name="password"
        placeholder="digite sua senha..."
        ref={register({ required: true })}
        type="password"
      />
      {!!errors.password && (<Error>{errors?.password?.message}</Error>)}

      <SubmitField type="submit">
        Entrar
      </SubmitField>
    </Form>
  );
};

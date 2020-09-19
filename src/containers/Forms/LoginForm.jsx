import React from 'react';
import { useForm } from 'react-hook-form';

import { Input, SubmitField } from 'components/Input';

import StyledForm from './Forms.styled';

const { Form, Label } = StyledForm;

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">E-mail</Label>
      <Input
        name="email"
        placeholder="digite seu email..."
        ref={register}
      />

      <Label htmlFor="password">Senha</Label>
      <Input
        name="password"
        placeholder="digite sua senha..."
        ref={register({ required: true })}
        type="password"
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <SubmitField type="submit">
        Entrar
      </SubmitField>
    </Form>
  );
};

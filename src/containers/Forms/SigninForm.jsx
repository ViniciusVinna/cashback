import React from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import { Input } from 'components/Input';

import StyledForm from './Forms.styled';

const { Form, Label } = StyledForm;

export const SigninForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noBorder={true}>
      <Label htmlFor="username">Nome Completo</Label>
      <Input
        name="username"
        type="text"
        placeholder="digite seu nome..."
        ref={register}
        data-testid="signin-form"
      />

      <Label htmlFor="cpf">CPF</Label>
      <Input
        name="cpf"
        type="tel"
        placeholder="000.000.000-00"
        ref={register}
      />

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

      <Button type="submit" variation="secondary">
        Finalizar Cadastro
      </Button>
    </Form>
  );
};

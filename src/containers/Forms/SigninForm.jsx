import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { createUser } from 'actions';

import { formatCPF, signinSchema } from 'modules';

import Button from 'components/Button';
import { Input } from 'components/Input';

import StyledForm from './Forms.styled';

const { Error, Form, Label } = StyledForm;

export const SigninForm = () => {
  const [cpf, setCPF] = useState('');
  const dispatch = useDispatch();
  const { errors, handleSubmit, register, reset } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const handleCpfChange = (e) => {
    const { value } = e.target;

    /* istanbul ignore else */
    if (value) {
      setCPF(formatCPF(value));

      return;
    }

    setCPF('');
  };

  const onSubmitHandler = (data) => {
    dispatch(createUser(data));

    reset();
    setCPF('');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} noBorder noMargin>
      <Label htmlFor="username">Nome Completo</Label>
      <Input
        hasError={!!errors.username}
        name="username"
        type="text"
        placeholder="digite seu nome..."
        ref={register({ required: true })}
        data-testid="signin-form"
      />
      {!!errors.username && (<Error>{errors?.username?.message}</Error>)}

      <Label htmlFor="cpf">CPF</Label>
      <Input
        hasError={!!errors.cpf}
        name="cpf"
        onChangeHandler={handleCpfChange}
        placeholder="000.000.000-00"
        ref={register({ required: true })}
        type="tel"
        value={cpf}
      />
      {!!errors.cpf && (<Error>{errors?.cpf?.message}</Error>)}

      <Label htmlFor="email">E-mail</Label>
      <Input
        hasError={!!errors.email}
        name="email"
        placeholder="digite seu email..."
        ref={register({ required: true })}
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

      <Button type="submit" variation="secondary">
        Criar Conta
      </Button>
    </Form>
  );
};

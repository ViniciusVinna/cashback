import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { purchaseSchema } from 'modules/form-validations';

import Button from 'components/Button';
import { Input } from 'components/Input';

import StyledForm from './Forms.styled';

const { Error, Form, Label } = StyledForm;

export const PurchaseForm = () => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(purchaseSchema),
  });
  const onSubmit = data => console.log(data);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      noBorder={true}
      noMargin={true}
      data-testid="purchase-form"
    >
      <Label htmlFor="code">Código</Label>
      <Input
        hasError={!!errors.code}
        name="code"
        placeholder="000000000000"
        ref={register({ required: true })}
        type="text"
      />
      {!!errors.code && (<Error>{errors?.code?.message}</Error>)}

      <Label htmlFor="value">Valor</Label>
      <Input
        hasError={!!errors.value}
        name="value"
        type="tel"
        placeholder="R$ 00,00"
        ref={register({ required: true })}
      />
      {!!errors.value && (<Error>{errors?.value?.message}</Error>)}

      <Label htmlFor="date">Data</Label>
      <Input
        hasError={!!errors.date}
        name="date"
        type="date"
        placeholder="00/00/0000"
        ref={register({ required: true })}
      />
      {!!errors.date && (<Error>{errors?.date?.message}</Error>)}

      <Button type="submit" variation="primary">
        Finalizar Cadastro
      </Button>
    </Form>
  );
};

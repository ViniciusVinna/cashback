import React from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import { Input } from 'components/Input';

import StyledForm from './Forms.styled';

const { Form, Label } = StyledForm;

export const PurchaseForm = () => {
  const { register, handleSubmit, errors } = useForm();
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
        name="code"
        placeholder="000000000000"
        ref={register({ required: true })}
        type="text"
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <Label htmlFor="value">Valor</Label>
      <Input
        name="value"
        type="tel"
        placeholder="R$ 00,00"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <Label htmlFor="date">Data</Label>
      <Input
        name="date"
        type="date"
        placeholder="00/00/0000"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <Button type="submit" variation="primary">
        Finalizar Cadastro
      </Button>
    </Form>
  );
};

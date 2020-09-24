import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';

import { createPurchase } from 'actions';

import { clearNumber, formatCurrency, purchaseSchema } from 'modules';

import Button from 'components/Button';
import { Input } from 'components/Input';

import StyledForm from './Forms.styled';

const { Error, Form, Label, Money } = StyledForm;

export const PurchaseForm = () => {
  const [purchaseValue, setPurchaseValue] = useState('');
  const { create: { status } } = useSelector(state => state.purchases);
  const dispatch = useDispatch();
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(purchaseSchema),
  });

  const handleValue = (e) => {
    const { value } = e.target;

    /* istanbul ignore else */
    if (value) {
      setPurchaseValue(clearNumber(value));

      return;
    }

    setPurchaseValue('');
  };

  const onSubmitHandler = (data) => {
    const purchasedata = { ...data, value: clearNumber(data.value) };

    dispatch(createPurchase(purchasedata));
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmitHandler)}
      noBorder
      noMargin
      data-testid="purchase-form"
    >
      <Label htmlFor="value">Valor</Label>
      <Money
        name="value"
        placeholder="00,00"
        onChange={handleValue}
        autoFocus
        ref={register({ required: true })}
        type="tel"
        value={formatCurrency(purchaseValue)}
      />
      {!!errors.value && (<Error>{errors?.value?.message}</Error>)}

      <Label htmlFor="code">Código</Label>
      <Input
        hasError={!!errors.code}
        name="code"
        placeholder="000000000000"
        ref={register({ required: true })}
        type="text"
      />
      {!!errors.code && (<Error>{errors?.code?.message}</Error>)}

      <Label htmlFor="date">Data</Label>
      <Input
        hasError={!!errors.date}
        name="date"
        type="date"
        placeholder="00/00/0000"
        ref={register({ required: true })}
      />
      {!!errors.date && (<Error>{errors?.date?.message}</Error>)}

      <Button type="submit" variation="primary" status={status}>
        Finalizar Cadastro
      </Button>
    </Form>
  );
};

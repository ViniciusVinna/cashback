import React from 'react';
import { useSelector } from 'react-redux';

import { formatCurrency } from 'modules';

import { BalanceStyled } from './Balance.styled';

const {
  BalanceWidget,
  Header,
  Info,
  Item,
  ItemValue,
  Label,
  Title,
  Value,
} = BalanceStyled;

const Balance = () => {
  const { balance, validation } = useSelector(state => state.purchases);

  return (
    <BalanceWidget data-testid="balance">
      <Header>
        <Title>Saldo</Title>
        <Value>{formatCurrency(balance)}</Value>
      </Header>

      <Info>
        <Item>
          <Label>Em validação</Label>
          <ItemValue>{formatCurrency(validation)}</ItemValue>
        </Item>

        {/* <Item>
          <Label>Pendente</Label>
          <ItemValue>validation</ItemValue>
        </Item> */}
      </Info>
    </BalanceWidget>
  );
};

export default Balance;

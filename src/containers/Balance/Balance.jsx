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
        <Title>Saldo disponível</Title>
        <Value>{formatCurrency(balance)}</Value>
      </Header>

      <Info>
        <Item>
          <Label>Em validação</Label>
          <ItemValue>
            <span>+</span>
            {formatCurrency(validation)}
          </ItemValue>
        </Item>
      </Info>
    </BalanceWidget>
  );
};

export default Balance;

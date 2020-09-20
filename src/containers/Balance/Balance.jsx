import React from 'react';
import PropTypes from 'prop-types';

import { BalanceStyled } from './Balance.styled';

const {
  BalanceWidget,
  Header,
  Title,
  Label,
  Value,
  Info,
  Item,
  ItemValue,
} = BalanceStyled;

const Balance = ({ balance, approved, pending }) => (
  <BalanceWidget data-testid="balance">
    <Header>
      <Title>Saldo</Title>
      <Value>{balance}</Value>
    </Header>

    <Info>
      <Item>
        <Label>Aprovado</Label>
        <ItemValue>{approved}</ItemValue>
      </Item>

      <Item>
        <Label>Pendente</Label>
        <ItemValue>{pending}</ItemValue>
      </Item>
    </Info>
  </BalanceWidget>
);

Balance.propTypes = {
  approved: PropTypes.string,
  balance: PropTypes.string,
  pending: PropTypes.string,
};

Balance.defaultProps = {
  approved: 'R$ 400,00',
  balance: 'R$ 245,00',
  pending: 'R$ 75,00',
};

export default Balance;

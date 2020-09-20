import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

import Drawer from 'containers/Drawer';

import { useDrawer } from 'hooks';

import { TransactionsStyled } from './Transactions.styles';

const {
  Code,
  Content,
  Date,
  Line,
  Transaction,
  TransactionsWrapper,
  Value,
} = TransactionsStyled;

const list = [
  {
    id: '1',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '2',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '3',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '4',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '5',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '6',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '7',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '8',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '9',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
  {
    id: '10',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '19/09/2020',
  },
];

const Transactions = () => {
  const [selectedId, toggleSelectedId] = useState('');
  const [isVisible, setVisibility, toggleDrawer] = useDrawer();

  const handleClick = (event) => {
    const { dataset: { transactionid } } = event.currentTarget;

    if (selectedId === transactionid) {
      toggleSelectedId('');

      return;
    }

    toggleSelectedId(transactionid);
    toggleDrawer();
  };

  return (
    <TransactionsWrapper>
      {list.map(({ id, code, value, status, date }) => (
        <Transaction
          data-transactionid={id}
          key={id}
          isActive={selectedId === id}
          onClick={handleClick}
        >
          <Content>
            <Line>
              <Code isActive={selectedId === id}>
                <span>Código:</span>
                {code}
              </Code>
            </Line>

            <Date isActive={selectedId === id}>
              <span>Data:</span>
              {date}
            </Date>
          </Content>

          <Value isActive={selectedId === id}>{value}</Value>
          <Ink />
        </Transaction>
      ))}

      <Drawer
        isVisible={isVisible}
        onCloseHandler={() => setVisibility(false)}
        title="Detalhes da Compra"
      >
        <div>Teste</div>
      </Drawer>
    </TransactionsWrapper>
  );
};

export default Transactions;

import React, { useReducer } from 'react';
import produce from 'immer';
import { FiChevronRight, FiShoppingBag } from 'react-icons/fi';

import { useDrawer } from 'hooks';

import Ripple from 'components/Ripple';

import Drawer from 'containers/Drawer';

import Details from './Details';

import { TransactionsStyled } from './Transactions.styles';

const {
  Code,
  Content,
  Date,
  Icon,
  Transaction,
  TransactionsWrapper,
  Value,
} = TransactionsStyled;

const list = [
  {
    id: '1',
    code: '123456789',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1600623109000',
  },
  {
    id: '2',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1600615909000',
  },
  {
    id: '3',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1600610449000',
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
    date: '1600437649000',
  },
  {
    id: '6',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1600434049000',
  },
  {
    id: '7',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1600174849000',
  },
  {
    id: '8',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1599915649000',
  },
  {
    id: '9',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1599829249000',
  },
  {
    id: '10',
    code: '123456',
    value: 'R$ 25,00',
    status: 'APROVADO',
    date: '1599742849000',
  },
];

const initialState = {
  selected: {},
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_TRANSACTION':
      return produce(state, draft => {
        draft.selected = payload;
      });

    default:
      return state;
  }
};

const Transactions = () => {
  const [isVisible, setVisibility, toggleDrawer] = useDrawer();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selected } = state;

  const getTransactionById = (id) => list.find(item => item.id === id);

  const handleClick = (event) => {
    const { dataset: { transactionid } } = event.currentTarget;

    /* istanbul ignore else */
    if (selected?.id === transactionid) {
      dispatch({ type: 'TOGGLE_TRANSACTION', payload: {} });

      return;
    }

    const transaction = getTransactionById(transactionid);

    dispatch({ type: 'TOGGLE_TRANSACTION', payload: transaction });
    toggleDrawer();
  };

  return (
    <TransactionsWrapper data-testid="transactions">
      {list.map(({ id, code, value, date }) => (
        <Transaction
          data-transactionid={id}
          key={id}
          isActive={selected?.id === id}
          onClick={handleClick}
        >
          <Icon isActive={selected?.id === id}>
            <FiShoppingBag />
          </Icon>
          <Content>
            <Code isActive={selected?.id === id}>
              {code}
            </Code>

            <Date isActive={selected?.id === id}>
              {date}
            </Date>
          </Content>

          <Value isActive={selected?.id === id}>
            {value}
            <FiChevronRight />
          </Value>

          <Ripple />
        </Transaction>
      ))}

      <Drawer
        isVisible={isVisible}
        onCloseHandler={() => setVisibility(false)}
        title="Detalhes da Compra"
      >
        <Details />
      </Drawer>
    </TransactionsWrapper>
  );
};

export default Transactions;

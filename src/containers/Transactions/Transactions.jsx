import React, { useState } from 'react';
import { FiChevronRight, FiShoppingBag } from 'react-icons/fi';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails, toggleDrawer } from 'actions';

import { formatCurrency, getDateTime } from 'modules';

import Ripple from 'components/Ripple';

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

const Transactions = () => {
  const [selectedId, setSelectedId] = useState();
  const { data: purchases } = useSelector(state => state.purchases);
  const dispatch = useDispatch();

  const debouncedDispatch = debounce(() => {
    dispatch(toggleDrawer(true));
  }, 200);

  const handleClick = (event) => {
    const { dataset: { transactionid } } = event.currentTarget;
    /* istanbul ignore else */
    if (transactionid === selectedId) {
      setSelectedId('');
      dispatch(toggleDrawer(false));

      return;
    }

    debouncedDispatch();
    dispatch(setDetails(transactionid));
    setSelectedId(transactionid);
  };

  if (!purchases.length) {
    return null;
  }

  return (
    <TransactionsWrapper data-testid="transactions">
      {purchases.map(({ id, code, value, date }) => (
        <Transaction
          data-transactionid={id}
          key={id}
          isActive={selectedId === id}
          onClick={handleClick}
        >
          <Icon isActive={selectedId === id}>
            <FiShoppingBag />
          </Icon>
          <Content>
            <Code isActive={selectedId === id}>
              {code}
            </Code>

            <Date isActive={selectedId === id}>
              {getDateTime(date)}
            </Date>
          </Content>

          <Value isActive={selectedId === id}>
            {formatCurrency(value)}
            <FiChevronRight />
          </Value>

          <Ripple />
        </Transaction>
      ))}
    </TransactionsWrapper>
  );
};

export default Transactions;

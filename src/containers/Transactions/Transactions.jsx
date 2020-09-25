import React, { Fragment, useState } from 'react';
import { FiChevronRight, FiShoppingBag } from 'react-icons/fi';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails, toggleDrawer } from 'actions';

import { STATUS, CASHBACK_STATUS } from 'constants/index';

import { getDate, formatCurrency } from 'modules';

import Ripple from 'components/Ripple';
import Bag from 'components/Bag';

import { TransactionsStyled } from './Transactions.styles';

const {
  Code,
  Content,
  Date,
  Empty,
  Icon,
  Status,
  Transaction,
  TransactionsGroup,
  TransactionsWrapper,
  Value,
} = TransactionsStyled;

const Transactions = () => {
  const [selectedId, setSelectedId] = useState();
  const { data, fetch } = useSelector(state => state.purchases);
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

  if (!Object.keys(data).length && fetch.status === STATUS.SUCCESS) {
    return (
      <Empty>
        <Bag />
        Você ainda não cadastrou nenhuma compra.
      </Empty>
    );
  }

  return (
    <TransactionsWrapper data-testid="transactions">
      {Object.keys(data).map((dateGroup) => (
        <Fragment key={dateGroup}>
          <Date>{getDate(dateGroup)}</Date>

          <TransactionsGroup>
            {data[dateGroup].map(({ id, code, value, status }) => (
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

                  <Status
                    isActive={selectedId === id}
                    status={status}
                  >
                    {CASHBACK_STATUS[status]}
                  </Status>
                </Content>

                <Value isActive={selectedId === id}>
                  {formatCurrency(value)}
                  <FiChevronRight />
                </Value>

                <Ripple />
              </Transaction>
            ))}
          </TransactionsGroup>
        </Fragment>
      ))}
    </TransactionsWrapper>
  );
};

export default Transactions;

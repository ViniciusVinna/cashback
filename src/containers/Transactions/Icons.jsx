import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiInfo,
  FiKey,
  FiMessageSquare,
  FiPercent,
  FiRotateCcw,
  FiTag,
} from 'react-icons/fi';

import { DICTIONARY } from './constants';

import { TransactionsStyled } from './Transactions.styles';

const { DetailIcon } = TransactionsStyled;

const TRANSACTION_ICONS = {
  [DICTIONARY.CASHBACK]: FiRotateCcw,
  [DICTIONARY.CODE]: FiTag,
  [DICTIONARY.DATE]: FiCalendar,
  [DICTIONARY.ID]: FiKey,
  [DICTIONARY.PERCENTAGE]: FiPercent,
  [DICTIONARY.REASON]: FiMessageSquare,
  [DICTIONARY.STATUS]: FiInfo,
  [DICTIONARY.TIME]: FiClock,
  [DICTIONARY.VALUE]: FiDollarSign,
};

const TransactionIcon = ({ name }) => {
  if (TRANSACTION_ICONS[name] && typeof TRANSACTION_ICONS[name] === 'function') {
    return (
      <DetailIcon name={name} data-testid="transaction-icon">
        {TRANSACTION_ICONS[name]()}
      </DetailIcon>
    );
  }

  return null;
};

TransactionIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default memo(TransactionIcon);

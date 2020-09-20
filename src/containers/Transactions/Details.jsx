import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icons';

import { MESSAGES } from './constants';

import { TransactionsStyled } from './Transactions.styles';

const {
  Detail,
  DetailValue,
  DetailsWrapper,
  Label,
} = TransactionsStyled;

const Details = ({ details }) => (
  <DetailsWrapper>
    {Object.keys(details).map(property => (
      <Detail key={property}>
        <Label>
          <Icon name={property} />
          {MESSAGES[property]}
        </Label>

        <DetailValue>
          {details[property]}
        </DetailValue>
      </Detail>
    ))}
  </DetailsWrapper>
);

Details.propTypes = {
  details: PropTypes.shape({
    cashback: PropTypes.string,
    code: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
    percentage: PropTypes.string,
    reason: PropTypes.string,
    status: PropTypes.string,
    time: PropTypes.string,
    value: PropTypes.string,
  }),
};

Details.defaultProps = {
  details: {
    id: '1',
    code: '123456',
    value: 'R$ 25,00',
    date: '1600623109000',
    time: '1600623109000',
    status: 'APROVADO',
    cashback: 'R$ 5,00',
    percentage: '2%',
    reason: 'Status aprovado pelo valor da compra',
  },
};

export default Details;

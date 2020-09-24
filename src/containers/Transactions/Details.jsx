import React from 'react';
import { useSelector } from 'react-redux';

import { MESSAGES } from './constants';

import Icon from './Icons';

import { TransactionsStyled } from './Transactions.styles';

const {
  Detail,
  DetailValue,
  DetailsWrapper,
  Label,
} = TransactionsStyled;

const Details = () => {
  const { details } = useSelector(state => state.purchases);

  return (
    <DetailsWrapper data-testid="details">
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
};

export default Details;

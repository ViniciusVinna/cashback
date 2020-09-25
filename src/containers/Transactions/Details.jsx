import React from 'react';
import { useSelector } from 'react-redux';

import { detailsParser } from 'modules';

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
  const parsedDetails = detailsParser(details);

  return (
    <DetailsWrapper data-testid="details">
      {Object.keys(parsedDetails).map(property => (
        <Detail key={property}>
          <Label>
            <Icon name={property} />
            {MESSAGES[property]}
          </Label>

          <DetailValue>
            {parsedDetails[property]}
          </DetailValue>
        </Detail>
      ))}
    </DetailsWrapper>
  );
};

export default Details;

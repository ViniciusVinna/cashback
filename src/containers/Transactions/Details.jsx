import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { detailsParser } from 'modules';

import InfoBox from 'components/InfoBox';

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
    <Fragment>
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

      <InfoBox />
    </Fragment>
  );
};

export default Details;

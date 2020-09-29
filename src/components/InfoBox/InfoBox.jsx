import React, { Fragment } from 'react';

import { InfoboxStyled } from './InfoBox.styled';

const {
  Item,
  List,
} = InfoboxStyled;

const InfoBox = () => (
  <Fragment>
    <List>
      <Item>
        <span>3%</span> de cashback em compras acima de R$ 50,00.
      </Item>

      <Item>
        <span>5%</span> de cashback em compras acima de R$ 250,00 até R$ 500,00.
      </Item>

      <Item>
        <span>8%</span> de cashback em compras a partir de R$ 500,00.
      </Item>

      <Item>
        <span role="img" aria-label="Atenção">👉</span>Compras acima de R$ 500,00 são validadas após 2 dias úteis.
      </Item>
    </List>
  </Fragment>
);
export default InfoBox;

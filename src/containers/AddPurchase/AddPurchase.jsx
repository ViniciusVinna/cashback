import React, { forwardRef } from 'react';
import { FiPlus } from 'react-icons/fi';

import Ripple from 'components/Ripple';

import { AddPurchaseStyled } from './AddPurchase.styled';

const {
  AddPurchaseWidget,
  PurchaseButton,
  PurchaseButtonWrapper,
} = AddPurchaseStyled;

const AddPurchase = forwardRef((props, ref) => (
  <AddPurchaseWidget ref={ref} data-testid="add-purchase">
    <PurchaseButtonWrapper>
      <PurchaseButton>
        <FiPlus />
        <Ripple />
      </PurchaseButton>
    </PurchaseButtonWrapper>
    Cadastrar Compra
  </AddPurchaseWidget>
));

export default AddPurchase;

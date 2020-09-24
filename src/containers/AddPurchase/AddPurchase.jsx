import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';

import Ripple from 'components/Ripple';

import { AddPurchaseStyled } from './AddPurchase.styled';

const {
  AddPurchaseWidget,
  PurchaseButton,
  PurchaseButtonWrapper,
} = AddPurchaseStyled;

const AddPurchase = forwardRef(({ onClickHandler }, ref) => (
  <AddPurchaseWidget
    ref={ref}
    data-testid="add-purchase"
  >
    <PurchaseButtonWrapper>
      <PurchaseButton onClick={onClickHandler}>
        <FiPlus />
        <Ripple />
      </PurchaseButton>
    </PurchaseButtonWrapper>
    Cadastrar Compra
  </AddPurchaseWidget>
));

AddPurchase.propTypes = {
  onClickHandler: PropTypes.func,
};

AddPurchase.defaultProps = {
  onClickHandler: () => {},
};

export default AddPurchase;

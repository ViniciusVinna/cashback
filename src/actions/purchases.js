import { createActions } from 'redux-actions';

import { PurchasesConstants } from 'constants/index';

export const {
  purchasesFetchRequest: getPurchases,
  purchasesCreateRequest: createPurchase,
} = createActions(
  {
    [PurchasesConstants.PURCHASES_FETCH_REQUEST]: () => ({}),
    [PurchasesConstants.PURCHASES_CREATE_REQUEST]: ({ date, code, value }) => ({ date, code, value }),
  }
);

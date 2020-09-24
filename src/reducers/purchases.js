import { handleActions } from 'redux-actions';
import produce from 'immer';

import { STATUS, PurchasesConstants } from 'constants/index';

const purchasesState = {
  balance: 0,
  validation: 0,
  data: [],
  details: {},
  fetch: {
    message: '',
    status: STATUS.IDLE,
  },
  create: {
    message: '',
    status: STATUS.IDLE,
  },
};

export default {
  purchases: handleActions({
    [PurchasesConstants.PURCHASES_FETCH_REQUEST]: (state) => produce(state, draft => {
      draft.fetch = {
        message: '',
        status: STATUS.RUNNING,
      };
    }),
    [PurchasesConstants.PURCHASES_FETCH_SUCCESS]: (state, { payload }) => produce(state, draft => {
      const { balance, purchases, validation } = payload;

      draft.balance = balance;
      draft.data = purchases;
      draft.fetch.status = STATUS.SUCCESS;
      draft.validation = validation;
    }),
    [PurchasesConstants.PURCHASES_FETCH_FAILURE]: (state, { payload: { message } }) => produce(state, draft => {
      draft.fetch = {
        message,
        status: STATUS.ERROR,
      };
    }),
    [PurchasesConstants.PURCHASES_CREATE_REQUEST]: (state) => produce(state, draft => {
      draft.create.status = STATUS.RUNNING;
    }),
    [PurchasesConstants.PURCHASES_CREATE_SUCCESS]: (state) => produce(state, draft => {
      draft.create = {
        status: STATUS.SUCCESS,
      };
    }),
    [PurchasesConstants.PURCHASES_CREATE_FAILURE]: (state, { payload: { message } }) => produce(state, draft => {
      draft.create = {
        message,
        status: STATUS.ERROR,
      };
    }),
    [PurchasesConstants.SET_DETAILS]: (state, { payload: { id } }) => produce(state, draft => {
      draft.details = state.data.find(detail => detail.id === id);
    }),
  }, purchasesState),
};

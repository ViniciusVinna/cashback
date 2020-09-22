import { handleActions } from 'redux-actions';
import produce from 'immer';

import { STATUS, PurchasesConstants } from 'constants/index';

const purchasesState = {
  data: [],
  fetch: {
    message: '',
    status: STATUS.IDLE,
  },
  create: {
    data: {},
    message: '',
    status: STATUS.IDLE,
  },
};

export default {
  purchases: handleActions({
    [PurchasesConstants.PURCHASES_FETCH_REQUEST]: (state) => produce(state, draft => {
      draft.fetch.status = STATUS.RUNNING;
    }),
    [PurchasesConstants.PURCHASES_FETCH_SUCCESS]: (state, { payload }) => produce(state, draft => {
      draft.data = payload;
      draft.fetch.status = STATUS.SUCCESS;
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
    [PurchasesConstants.PURCHASES_CREATE_SUCCESS]: (state, { payload }) => produce(state, draft => {
      draft.create = {
        data: payload,
        message: '',
        status: STATUS.SUCCESS,
      };
    }),
    [PurchasesConstants.PURCHASES_CREATE_FAILURE]: (state, { payload: { message } }) => produce(state, draft => {
      draft.create = {
        data: {},
        message,
        status: STATUS.ERROR,
      };
    }),
  }, purchasesState),
};

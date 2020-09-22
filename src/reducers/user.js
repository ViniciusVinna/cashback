import { handleActions } from 'redux-actions';
import produce from 'immer';

import { STATUS, UserConstants } from 'constants/index';

const userState = {
  data: {},
  cashback: {
    data: {},
    message: '',
    status: STATUS.IDLE,
  },
  create: {
    data: {},
    message: '',
    status: STATUS.IDLE,
  },
  fetch: {
    message: '',
    status: STATUS.IDLE,
  },
};

export default {
  user: handleActions({
    [UserConstants.USER_AUTH_REQUEST]: (state) => produce(state, draft => {
      draft.fetch.status = STATUS.RUNNING;
    }),
    [UserConstants.USER_AUTH_SUCCESS]: (state, { payload }) => produce(state, draft => {
      draft.data = payload;
      draft.fetch.status = STATUS.SUCCESS;
    }),
    [UserConstants.USER_AUTH_FAILURE]: (state, { payload: { message } }) => produce(state, draft => {
      draft.fetch = {
        message,
        status: STATUS.ERROR,
      };
    }),
    [UserConstants.USER_CASHBACK_REQUEST]: (state) => produce(state, draft => {
      draft.cashback.status = STATUS.RUNNING;
    }),
    [UserConstants.USER_CASHBACK_SUCCESS]: (state, { payload }) => produce(state, draft => {
      draft.cashback = {
        data: payload,
        message: '',
        status: STATUS.SUCCESS,
      };
    }),
    [UserConstants.USER_CASHBACK_FAILURE]: (state, { payload: { message } }) => produce(state, draft => {
      draft.cashback = {
        data: {},
        message,
        status: STATUS.ERROR,
      };
    }),
    [UserConstants.USER_CREATE_REQUEST]: (state) => produce(state, draft => {
      draft.create.status = STATUS.RUNNING;
    }),
    [UserConstants.USER_CREATE_SUCCESS]: (state, { payload }) => produce(state, draft => {
      draft.create = {
        data: payload,
        message: '',
        status: STATUS.SUCCESS,
      };
    }),
    [UserConstants.USER_CREATE_FAILURE]: (state, { payload: { message } }) => produce(state, draft => {
      draft.create = {
        message,
        status: STATUS.ERROR,
      };
    }),
  }, userState),
};

import { handleActions } from 'redux-actions';
import produce from 'immer';

import { STATUS, UserConstants } from 'constants/index';

const userState = {
  accessToken: '',
  data: {},
  create: {
    data: {},
    message: '',
    status: STATUS.IDLE,
  },
  fetch: {
    message: '',
    status: STATUS.IDLE,
  },
  isLogged: false,
};

export default {
  user: handleActions({
    [UserConstants.USER_FETCH_REQUEST]: (state) => produce(state, draft => {
      draft.accessToken = '';
      draft.data = {};
      draft.fetch = {
        message: '',
        status: STATUS.RUNNING,
      };
    }),
    [UserConstants.USER_FETCH_SUCCESS]: (state, { payload }) => produce(state, draft => {
      const { accessToken, ...rest } = payload;

      draft.accessToken = accessToken;
      draft.data = rest;
      draft.isLogged = !!accessToken && Object.keys(rest).length > 0;
      draft.fetch.status = STATUS.SUCCESS;
    }),
    [UserConstants.USER_FETCH_FAILURE]: (state, { payload: { message } }) => produce(state, draft => {
      draft.fetch = {
        message,
        status: STATUS.ERROR,
      };
    }),
    [UserConstants.USER_CREATE_REQUEST]: (state) => produce(state, draft => {
      draft.create = {
        message: '',
        status: STATUS.RUNNING,
      };
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

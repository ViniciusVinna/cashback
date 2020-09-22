/**
 * @module Sagas/User
 * @desc User
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { parseResponseError } from 'modules/client';
import { client, endpoints, getRequestOptions } from 'modules/services';

import { UserConstants } from 'constants/index';

export function* userGet({ payload }) {
  try {
    const data = yield call(client, endpoints.userGet, {
      ...yield getRequestOptions(),
      ...payload,
    });

    console.log({ data }); //eslint-disable-line no-console

    // yield put({
    //   type: UserConstants.USER_AUTH_SUCCESS,
    //   payload: {},
    // });
  }
  catch ({ message, status }) {
    yield put({
      type: UserConstants.USER_AUTH_FAILURE,
      payload: { message: parseResponseError(message, status), status },
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(UserConstants.USER_AUTH_REQUEST, userGet),
  ]);
}

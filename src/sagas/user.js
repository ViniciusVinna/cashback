/**
 * @module Sagas/User
 * @desc User
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  client,
  endpoints,
  parseResponseError,
} from 'modules';

import { UserConstants } from 'constants/index';
import { jwtLogin, jwtSignin } from './side-effects';

export function* userGet({ payload }) {
  try {
    const authToken = yield jwtLogin(payload);
    const data = yield call(client, endpoints.userGet, { authToken });

    yield put({
      type: UserConstants.USER_FETCH_SUCCESS,
      payload: { ...JSON.parse(data) },
    });
  }
  catch ({ message, status }) {
    yield put({
      type: UserConstants.USER_FETCH_FAILURE,
      payload: { message: parseResponseError(message, status), status },
    });
  }
}

export function* userCreate({ payload }) {
  try {
    yield jwtSignin(payload);

    const data = yield call(client, endpoints.userCreate, { payload });

    yield put({
      type: UserConstants.USER_CREATE_SUCCESS,
      payload: { ...JSON.parse(data) },
    });
  }
  catch ({ message, status }) {
    yield put({
      type: UserConstants.USER_CREATE_FAILURE,
      payload: { message: parseResponseError(message, status), status },
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(UserConstants.USER_FETCH_REQUEST, userGet),
    takeLatest(UserConstants.USER_CREATE_REQUEST, userCreate),
  ]);
}

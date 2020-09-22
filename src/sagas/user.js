/**
 * @module Sagas/User
 * @desc User
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  client,
  endpoints,
  getRequestOptions,
  parseResponseError,
} from 'modules';

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

export function* userCreate({ payload }) {
  try {
    const data = yield call(client, endpoints.userCreate, {
      ...yield getRequestOptions(),
      ...payload,
    });

    const { email, password } = payload;

    window.auth
      .signup(email.value, password.value)
      .then(response => console.log(response))
      .catch(error => console.log(error));

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
    takeLatest(UserConstants.USER_CREATE_REQUEST, userCreate),
  ]);
}

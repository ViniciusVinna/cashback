/**
 * @module Sagas/User
 * @desc User
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { push, showAlert } from 'actions';

import {
  client,
  endpoints,
  parseResponseError,
} from 'modules';

import { STATUS, UserConstants } from 'constants/index';
import { jwtLogin, jwtSignin } from './side-effects';

export function* userGet({ payload }) {
  try {
    const accessToken = yield jwtLogin(payload);

    const data = yield call(client, endpoints.userGet, { accessToken });

    yield put({
      type: UserConstants.USER_FETCH_SUCCESS,
      payload: { ...JSON.parse(data) },
    });

    yield put(push('/dashboard'));
  }
  catch ({ message, status }) {
    yield put({
      type: UserConstants.USER_FETCH_FAILURE,
      payload: { message: parseResponseError(message, status), status },
    });

    yield put(showAlert(message, { status: STATUS.ERROR }));
  }
}

export function* userCreate({ payload }) {
  try {
    yield jwtSignin(payload);

    const data = yield call(client, endpoints.userCreate, { payload });

    yield put(showAlert('Conta criada com sucesso! Faça login para continuar.', { status: STATUS.SUCCESS }));

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

    yield put(showAlert(parseResponseError(message), { status: STATUS.ERROR }));
  }
}

export default function* root() {
  yield all([
    takeLatest(UserConstants.USER_FETCH_REQUEST, userGet),
    takeLatest(UserConstants.USER_CREATE_REQUEST, userCreate),
  ]);
}

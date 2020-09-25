/**
 * @module Sagas/User
 * @desc User
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getPurchases, showAlert } from 'actions';

import {
  client,
  endpoints,
  getRequestOptions,
  parseResponseError,
} from 'modules';

import { STATUS, PurchasesConstants } from 'constants/index';

export function* purchasesCreate({ payload }) {
  try {
    const { id } = yield getRequestOptions();
    const data = yield call(client, endpoints.purchasesCreate, {
      ...yield getRequestOptions(),
      payload: {
        ...payload,
        id,
      },
    });

    yield put({
      type: PurchasesConstants.PURCHASES_CREATE_SUCCESS,
      payload: { ...JSON.parse(data) },
    });

    yield put(showAlert(
      `A compra ${payload.code} foi cadastrada com sucesso.`,
      { status: STATUS.SUCCESS }
    ));

    yield put(getPurchases());
  }
  catch ({ message, status }) {
    yield put({
      type: PurchasesConstants.PURCHASES_CREATE_FAILURE,
      payload: { message: parseResponseError(message, status), status },
    });

    yield put(showAlert(
      'Parece que tivemos um problema no servidor. Tente novamente.',
      { status: STATUS.ERROR }
    ));
  }
}

export function* purchasesGet() {
  try {
    const data = yield call(client, endpoints.purchasesGet, {
      ...yield getRequestOptions(),
    });

    yield put({
      type: PurchasesConstants.PURCHASES_FETCH_SUCCESS,
      payload: { ...JSON.parse(data) },
    });
  }
  catch ({ message, status }) {
    yield put({
      type: PurchasesConstants.PURCHASES_FETCH_FAILURE,
      payload: { message: parseResponseError(message, status), status },
    });

    yield put(showAlert(
      'Parece que tivemos um problema no servidor. Tente novamente.',
      { status: STATUS.ERROR }
    ));
  }
}

export default function* root() {
  yield all([
    takeLatest(PurchasesConstants.PURCHASES_CREATE_REQUEST, purchasesCreate),
    takeLatest(PurchasesConstants.PURCHASES_FETCH_REQUEST, purchasesGet),
  ]);
}

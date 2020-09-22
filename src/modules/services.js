import format from 'string-format';
import { select } from 'redux-saga/effects';

import { keymirror } from 'modules/keymirror';
import { request } from 'modules/client';

import config from 'config';

export const resources = {
  userCashbackGet: {
    method: 'POST',
    endpoint: 'user-cashback',
  },
  userCreate: {
    method: 'POST',
    endpoint: 'users-create',
  },
  userGet: {
    method: 'POST',
    endpoint: 'user-authenticate',
  },
  purchaseCreate: {
    method: 'POST',
    endpoint: 'purchases-create',
  },
  purchaseDelete: {
    method: 'POST',
    endpoint: 'purchases-delete',
  },
};

export const endpoints = keymirror(resources);

/**
 * Get request options from the store
 * @returns {{authToken: string}}
 */
export function* getRequestOptions() {
  const { authToken } = yield select(state => state.app);

  return { authToken };
}

/**
 * Add required parameters
 *
 * @param {string} endpoint
 * @returns {string}
 */
const getURLWithParams = (endpoint) => {
  const join = endpoint.indexOf('?') >= 0 ? '&' : '?';

  return `${config.apiURL}${endpoint}${join}`;
};

/**
 * Fetch data from hybris.
 *
 * @param {string} endpoint
 * @param {string} authToken
 * @param {Object} [headers]
 * @param {Object} [payload]
 * @param {Object} [type]
 * @param {Object} rest
 *
 * @returns {Promise<Object>}
 */
export async function client(endpoint, { authToken, headers, payload, type, ...rest }) {
  const resource = resources[endpoint];

  return request({
    url: format(getURLWithParams(resource.endpoint), { ...rest }),
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      ...headers,
    },
    method: resource.method,
    payload,
    type: type || 'JSON',
  });
}

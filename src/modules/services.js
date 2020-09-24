import format from 'string-format';
import { select } from 'redux-saga/effects';

import { keymirror } from 'modules/keymirror';
import { request } from 'modules/client';

import config from 'config';

export const resources = {
  userCreate: {
    method: 'POST',
    endpoint: 'users',
  },
  userGet: {
    method: 'GET',
    endpoint: 'users',
  },
  purchasesCreate: {
    method: 'POST',
    endpoint: 'purchases',
  },
  purchasesGet: {
    method: 'GET',
    endpoint: 'purchases',
  },
};

export const endpoints = keymirror(resources);

/**
 * Get request options from the store
 * @returns {{accessToken: string}}
 */
export function* getRequestOptions() {
  const { accessToken } = yield select(state => state.user);

  return { accessToken };
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
 * @param {string} accessToken
 * @param {Object} [headers]
 * @param {Object} [payload]
 * @param {Object} [type]
 * @param {Object} rest
 *
 * @returns {Promise<Object>}
 */
export async function client(endpoint, { accessToken, headers, payload, type, ...rest }) {
  const resource = resources[endpoint];

  return request({
    url: format(getURLWithParams(resource.endpoint), { ...rest }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...headers,
    },
    method: resource.method,
    payload,
    type: type || 'JSON',
  });
}

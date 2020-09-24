const format = require('string-format');

const keymirror = require('./keymirror');
const { request } = require('./client');
const { baseURL } = require('./config');

const resources = {
  createUser: {
    method: 'POST',
    endpoint: 'users',
  },
  getUser: {
    method: 'GET',
    endpoint: 'users?search={email}',
  },
  getUserById: {
    method: 'GET',
    endpoint: 'users/{id}',
  },
  getPurchases: {
    method: 'GET',
    endpoint: 'users/{id}/purchases',
  },
  createPurchases: {
    method: 'POST',
    endpoint: 'users/{id}/purchases',
  },
};

const endpoints = keymirror(resources);

const getURLWithParams = (endpoint) => `${baseURL}${endpoint}`;

/**
 * Fetch data
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
async function client(endpoint, { payload, ...rest }) {
  const resource = resources[endpoint];

  return request({
    url: format(getURLWithParams(resource.endpoint), { ...rest }),
    headers: { 'Content-Type': 'application/json' },
    method: resource.method,
    payload,
    type: 'JSON',
  });
}

module.exports = {
  client,
  endpoints,
};

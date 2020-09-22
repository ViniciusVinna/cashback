const format = require('string-format');

const baseURL = 'https://5f6928e5dc0bff0016f443a3.mockapi.io/api/v1/';

const endpoints = {
  createUser: {
    method: 'POST',
    endpoint: 'users',
  },
  getUser: {
    method: 'GET',
    endpoint: 'users?search={email}',
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

const urlFormatter = (endpoint, payload) => {
  const url = baseURL + endpoint;

  return format(url, { ...payload });
};

module.exports = {
  endpoints,
  urlFormatter,
};

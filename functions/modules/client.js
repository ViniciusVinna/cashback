const fetch = require('node-fetch');
const qs =  require('qs');
const { baseURL } = require('./config');
const { parseErrorObject } = require('./helpers');

/**
 * Parse request error.
 *
 * @param {string} error
 * @param {number} status
 *
 * @returns {string}
 */
const parseResponseError = (error, status = 0) => {
  if (status === 400) {
    return 'Problemas com o servidor. Tente novamente mais tarde.';
  }

  if (!error || error.includes('ajax error')) {
    return 'Algum erro ocorreu. Por favor, verifique sua conexão ou tente novamente.';
  }

  return error;
};

/**
 * Parse status code into status message
 * @param {number} status
 * @returns {*|string}
 */
const parseStatus = (status) => {
  /* eslint-disable quote-props */
  const statuses = {
    '100': 'Continue',
    '101': 'Switching Protocols',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '300': 'Multiple Choices',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Request Entity Too Large',
    '414': 'Request-URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Requested Range Not Satisfiable',
    '417': 'Expectation Failed',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
  };
  /* eslint-enable quote-props */

  return statuses[`${status}`] || '';
};

/**
 * Fetch data returning a Promise
 *
 * @param {Object} action
 * @param {string} [action.endpoint] - API Endpoint
 * @param {string} [action.method] - Request method ( GET, POST, PUT, ... ).
 * @param {string} [action.type] - Request format (default: JSON).
 * @param {string} [action.payload] - Request body.
 * @param {Object} [action.headers]
 * @param {Object} [action.url]
 *
 * @returns {Promise}
 */
const request = (action) => {
  if (!action) {
    throw new Error('The action parameter is required');
  }

  const contentTypes = {
    JSON: 'application/json',
    urlencoded: 'application/x-www-form-urlencoded',
  };
  const errors = [];

  if (!action.endpoint && !action.url) {
    errors.push('`an url` or `endpoint`');
  }

  if (action.type && !contentTypes[action.type]) {
    errors.push('`a valid type`');
  }

  if (errors.length) {
    throw new Error(`Error! You must pass ${errors.join(', ')}`);
  }

  const type = action.type || 'urlencoded';
  const url = action.url || `${baseURL}${action.endpoint || ''}`;
  const headers = {
    Accept: 'application/json',
    'Content-Type': contentTypes[type],
    ...action.headers,
  };

  const params = {
    body: undefined,
    headers,
    method: action.method || 'GET',
  };

  if (action.payload && type === 'JSON') {
    params.body = action.payload;
  }
  else if (params.method !== 'GET' && action.payload) {
    params.body = qs.stringify(action.payload);
  }

  return fetch(url, params)
    .then(async (response) => {
      if (response.status > 299) {
        const data = await response.json();
        const parsedError = parseErrorObject(data);

        const error = new Error(parsedError || parseStatus(response.status));

        error.response = data;
        error.status = response.status;

        throw error;
      }

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        return response.json();
      }

      return response.text();
    });
};

module.exports = {
  request,
  parseResponseError,
};

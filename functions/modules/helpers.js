const is =  require('is-lite');
const dayjs = require('dayjs');

console.log({ is, dayjs });

/**
 * Strips all non-digit characters of the given string
 * @param {string} value
 * @returns {string}
 */
const clearNumber = (value) => {
  const cleared = value.toString();

  return cleared.replace(/\D+/g, '');
};

/**
 * Parse error object
 *
 * @param {Object} data
 * @returns {string}
 */
const parseErrorObject = (data) => {
  let output = '';

  if (!is.plainObject(data)) {
    return output;
  }

  try {
    if (Array.isArray(data.errors)) {
      output = data.errors[0].message;
    }
    else if (is.plainObject(data.error)) {
      output = data.error.message;
    }
    else if (data.error && data.error_description) {
      output = data.error_description;
    }
  }
  catch (error) {
    console.error(error); //eslint-disable-line no-console
  }

  return output;
};

const sortObject = (obj) => Object.keys(obj)
  .sort()
  .reduce((result, key) => {
    result[key] = obj[key];

    return result;
  }, {});

const getTimestamp = (date) => dayjs(date).valueOf();

module.exports = {
  clearNumber,
  parseErrorObject,
  sortObject,
  getTimestamp,
};

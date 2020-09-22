import is from 'is-lite';

/**
 * Parse error object
 *
 * @param {Object} data
 * @returns {string}
 */
export const parseErrorObject = (data) => {
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

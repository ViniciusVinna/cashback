/**
 * Parser functions.
 * @module Parsers
 */

/**
 * Parse user profile
 * @param {Object} data
 *
 * @returns {{
  * accessToken: {string},
  * cpf: {string},
  * email: {string},
  * username: {string},
  * }}
  */
const parseUserProfile = (data, { token }) => {
  const user = data[0] || {};

  return {
    accessToken: token || '',
    cpf: user.cpf || '',
    email: user.email || '',
    firstname: user?.username?.split(' ')[0] || '',
    username: user.username || '',
  };
};

module.exports = {
  parseUserProfile,
};

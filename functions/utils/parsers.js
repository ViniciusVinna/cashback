/**
 * Parser functions.
 * @module Parsers
 */

const parseUser = (data, { token = '' }) => {
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
  parseUser,
};

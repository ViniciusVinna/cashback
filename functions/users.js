const fetch = require('node-fetch');

const { endpoints, urlFormatter } = require('./utils/services');
const { parseUserProfile } = require('./utils/parsers');

const { getUser, createUser } = endpoints;

exports.handler = async ({ httpMethod, body }, { clientContext }) => {
  if (httpMethod === 'POST') {
    try {
      const response = await fetch(urlFormatter(createUser.endpoint), {
        method: createUser.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...JSON.parse(body) }),
      });

      const data = await response.json();

      return {
        statusCode: 201,
        body: JSON.stringify(data),
      };
    }
    catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: error.toString() }),
      };
    }
  }

  if (httpMethod === 'GET') {
    try {
      const { identity, user } = clientContext;

      const response = await fetch(urlFormatter(getUser.endpoint, { ...user }), {
        method: getUser.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const userProfile = parseUserProfile(data, identity);

      return {
        statusCode: 201,
        body: JSON.stringify(userProfile),
      };
    }
    catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: error.toString() }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'The method specified in the request is not allowed' }),
  };
};

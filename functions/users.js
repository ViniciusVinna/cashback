const { client, endpoints } = require('./modules/services');
const { parseUserResponse } = require('./modules/parsers');

exports.handler = async ({ httpMethod, body }, { clientContext }) => {
  if (httpMethod === 'POST') {
    try {
      const mockApiResponse = await client(endpoints.createUser, { payload: body });
      return {
        statusCode: 201,
        body: JSON.stringify(mockApiResponse),
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
      const { identity = {}, user } = clientContext;
      console.log({ httpMethod, body, identity, user });

      const mockApiResponse = await client(endpoints.getUser, { ...user });
      const userProfile = parseUserResponse(mockApiResponse, identity);

      return {
        statusCode: 200,
        body: userProfile,
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

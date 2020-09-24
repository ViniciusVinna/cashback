const fetch = require('node-fetch');

const { endpoints, urlFormatter } = require('./utils/services');

const { getUser, getPurchases, createPurchases } = endpoints;

exports.handler = async ({ httpMethod, body }, { clientContext }) => {
  const { user } = clientContext;

  if (httpMethod === 'POST') {
    try {
      const userResponse = await fetch(urlFormatter(getUser.endpoint, { ...user }), {
        method: getUser.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const userData = await userResponse.json();

      const purchases = await fetch(urlFormatter(createPurchases.endpoint, { ...userData[0] }), {
        method: createPurchases.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...JSON.parse(body) }),
      });

      const purchaseData = await purchases.json();

      return {
        statusCode: 201,
        body: JSON.stringify(purchaseData),
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
      const userResponse = await fetch(urlFormatter(getUser.endpoint, { ...user }), {
        method: getUser.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const userData = await userResponse.json();

      const purchases = await fetch(urlFormatter(getPurchases.endpoint, { ...userData[0] }), {
        method: getPurchases.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const purchaseData = await purchases.json();

      if (purchaseData === 'Not found') {
        return {
          statusCode: 200,
          body: JSON.stringify({
            cashback: 0,
            count: 0,
            purchases: [],
          }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          cashback: 0,
          count: 0,
          purchases: purchaseData,
        }),
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

const { client, endpoints } = require('./modules/services');
const { parseCreatePurchase, parsePurchasesResponse } = require('./modules/parsers');

exports.handler = async ({ queryStringParameters, httpMethod, body }) => {
  if (httpMethod === 'POST') {
    try {
      const purchase = parseCreatePurchase(body);
      const mockApiResponse = await client(endpoints.createPurchases, { payload: purchase, ...JSON.parse(body) });

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
      const purchasesMockApiResponse = await client(endpoints.getPurchases, { ...queryStringParameters });
      const purchases = parsePurchasesResponse(purchasesMockApiResponse);

      return {
        statusCode: 200,
        body: purchases,
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

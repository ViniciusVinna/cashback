exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext;
  console.log({ identity, user });//eslint-disable-line no-console

  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: 200,
    }),
  };
};

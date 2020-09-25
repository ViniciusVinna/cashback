import { getEnvURL } from 'modules/helpers';

const config = {
  apiURL: `${getEnvURL()}/.netlify/functions/`,
  identityURL: 'https://cashback-boticario.netlify.app/.netlify/identity',
};

export default config;

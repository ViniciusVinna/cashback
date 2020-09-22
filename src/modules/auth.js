import GoTrue from 'gotrue-js';
import config from 'config';

export const authClient = new GoTrue({
  APIUrl: config.identityURL,
  setCookie: false,
});

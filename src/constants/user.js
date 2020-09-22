/**
 * @module Constants/User
 * @desc User Constants
 */

import { keymirror } from 'modules/keymirror';

/**
 * @constant {Object} UserConstants
 * @memberof Constants
 */
export const UserConstants = keymirror({
  USER_FETCH_REQUEST: undefined,
  USER_FETCH_SUCCESS: undefined,
  USER_FETCH_FAILURE: undefined,
  USER_CREATE_REQUEST: undefined,
  USER_CREATE_SUCCESS: undefined,
  USER_CREATE_FAILURE: undefined,
});

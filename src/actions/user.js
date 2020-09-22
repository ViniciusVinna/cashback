import { createActions } from 'redux-actions';

import { UserConstants } from 'constants/index';

export const {
  userAuthRequest: getUser,
  userCashbackRequest: getCashback,
  userCreateRequest: createUser,
} = createActions(
  {
    [UserConstants.USER_AUTH_REQUEST]: ({ email, password }) => ({ email, password }),
    [UserConstants.USER_CASHBACK_REQUEST]: (id) => ({ id }),
    [UserConstants.USER_CREATE_REQUEST]: ({ cpf, email, firstName, lastName, password }) => ({
      cpf,
      email,
      firstName,
      lastName,
      password,
    }),
  }
);

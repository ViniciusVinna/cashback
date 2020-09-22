import { createActions } from 'redux-actions';

import { UserConstants } from 'constants/index';

export const {
  userFetchRequest: getUser,
  userCreateRequest: createUser,
} = createActions(
  {
    [UserConstants.USER_FETCH_REQUEST]: ({ email, password }) => ({ email, password }),
    [UserConstants.USER_CREATE_REQUEST]: ({ cpf, email, password, username }) => ({
      cpf,
      email,
      password,
      username,
    }),
  }
);

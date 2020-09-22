import { call } from 'redux-saga/effects';

export function* jwtSignin({ email, password }) {
  try {
    const { auth } = window;

    yield call(() => new Promise((resolve, reject) => auth
      .signup(email, password)
      .then(resolve, reject)
    ));
  }
  catch (err) {
    throw new Error(err);
  }
}

export function* jwtLogin({ email, password }) {
  try {
    const { auth } = window;

    const { token: { access_token: authToken } } = yield call(() => new Promise((resolve, reject) => auth
      .login(email, password)
      .then(resolve, reject)
    ));

    return authToken;
  }
  catch (err) {
    throw new Error(err);
  }
}

import { all, fork } from 'redux-saga/effects';

import purchases from './purchases';
import user from './user';

export default function* root() {
  yield all([
    fork(purchases),
    fork(user),
  ]);
}

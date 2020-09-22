import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './app';
import purchasesReducer from './purchases';
import userReducer from './user';

export default (history) => combineReducers({
  ...appReducer,
  ...purchasesReducer,
  ...userReducer,
  router: connectRouter(history),
});

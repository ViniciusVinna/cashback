import appReducer from './app';
import purchasesReducer from './purchases';
import userReducer from './user';

export default {
  ...appReducer,
  ...purchasesReducer,
  ...userReducer,
};

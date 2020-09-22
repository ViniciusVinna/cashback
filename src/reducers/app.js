import { handleActions } from 'redux-actions';
import produce from 'immer';

import { getViewportSize } from 'modules';

import { STATUS, AppConstants } from 'constants/index';
import packageJson from '../../package.json';

const appState = {
  alerts: [],
  authToken: '',
  environment: process.env.NODE_ENV,
  screenSize: getViewportSize(),
  status: STATUS.IDLE,
  version: packageJson.version,
};

export default {
  app: handleActions({
    [AppConstants.HIDE_ALERT]: (state, { payload }) => produce(state, draft => {
      draft.alerts = draft.alerts.filter(alert => payload.id !== alert.id);
    }),
    [AppConstants.SET_AUTH_TOKEN]: (state, { payload }) => produce(state, draft => {
      draft.authToken = payload.authToken;
    }),
    [AppConstants.SET_SCREEN_SIZE]: (state, { payload }) => produce(state, draft => {
      draft.screenSize = payload.screenSize;
    }),
    [AppConstants.SHOW_ALERT]: (state, { payload }) => produce(state, draft => {
      draft.alerts.push({ ...payload });
    }),
  }, appState),
};

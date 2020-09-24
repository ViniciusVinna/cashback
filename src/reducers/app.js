import { handleActions } from 'redux-actions';
import produce from 'immer';

import { getViewportSize } from 'modules';

import { STATUS, AppConstants, UserConstants } from 'constants/index';
import packageJson from '../../package.json';

const appState = {
  alerts: [],
  environment: process.env.NODE_ENV,
  isLoading: false,
  isScrollLocked: false,
  isDrawerOpen: false,
  screenSize: getViewportSize(),
  status: STATUS.IDLE,
  statusMessage: '',
  version: packageJson.version,
};

export default {
  app: handleActions({
    [AppConstants.HIDE_ALERT]: (state, { payload }) => produce(state, draft => {
      draft.alerts = draft.alerts.filter(alert => payload.id !== alert.id);
    }),
    [AppConstants.SET_SCREEN_SIZE]: (state, { payload }) => produce(state, draft => {
      draft.screenSize = payload.screenSize;
    }),
    [AppConstants.SET_DRAWER_VISIBILITY]: (state, { payload }) => produce(state, draft => {
      draft.isDrawerOpen = payload.isOpen;
      draft.isScrollLocked = payload.true;
    }),
    [AppConstants.SHOW_ALERT]: (state, { payload }) => produce(state, draft => {
      draft.alerts.push({ ...payload });
    }),
    [UserConstants.USER_CREATE_REQUEST]: (state) => produce(state, draft => {
      draft.isLoading = true;
      draft.isScrollLocked = true;
      draft.statusMessage = 'Criando cadastro...';
    }),
    [UserConstants.USER_CREATE_SUCCESS]: (state) => produce(state, draft => {
      draft.isDrawerOpen = false;
      draft.isLoading = false;
      draft.isScrollLocked = false;
      draft.statusMessage = '';
    }),
    [UserConstants.USER_CREATE_FAILURE]: (state) => produce(state, draft => {
      draft.isLoading = false;
      draft.isScrollLocked = false;
      draft.statusMessage = '';
    }),
    [UserConstants.USER_FETCH_REQUEST]: (state) => produce(state, draft => {
      draft.isLoading = true;
      draft.statusMessage = 'Verificando dados de acesso';
    }),
    [UserConstants.USER_FETCH_SUCCESS]: (state) => produce(state, draft => {
      draft.isDrawerOpen = false;
      draft.isLoading = false;
      draft.isScrollLocked = false;
      draft.statusMessage = '';
    }),
    [UserConstants.USER_FETCH_FAILURE]: (state) => produce(state, draft => {
      draft.isLoading = false;
      draft.isScrollLocked = false;
      draft.statusMessage = '';
    }),
  }, appState),
};

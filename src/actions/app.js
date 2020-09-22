import { createActions } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

import { AppConstants } from 'constants/index';

export const {
  hideAlert,
  setAuthToken,
  setScreenSize,
  showAlert,
} = createActions(
  {
    [AppConstants.HIDE_ALERT]: (id) => ({ id }),
    [AppConstants.SET_AUTH_TOKEN]: (authToken) => ({ authToken }),
    [AppConstants.SET_SCREEN_SIZE]: (screenSize) => ({ screenSize }),
    [AppConstants.SHOW_ALERT]: (message, options = {}) => ({
      icon: options.icon,
      id: options.id || uuidv4(),
      message,
      position: options.position || 'BOTTOM_RIGHT',
      status: options.status,
      timeout: options.timeout,
    }),
  }
);

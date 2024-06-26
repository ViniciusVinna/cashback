import { createActions } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

import { AppConstants } from 'constants/index';

export const {
  hideAlert,
  setDialogVisibility: toggleDialog,
  setDrawerVisibility: toggleDrawer,
  setScreenSize,
  showAlert,
} = createActions(
  {
    [AppConstants.HIDE_ALERT]: (id) => ({ id }),
    [AppConstants.SET_DIALOG_VISIBILITY]: (isOpen) => ({ isOpen }),
    [AppConstants.SET_DRAWER_VISIBILITY]: (isOpen) => ({ isOpen }),
    [AppConstants.SET_SCREEN_SIZE]: (screenSize) => ({ screenSize }),
    [AppConstants.SHOW_ALERT]: (message, options = {}) => ({
      icon: options.icon,
      id: options.id || uuidv4(),
      message,
      position: options.position || 'BOTTOM_CENTER',
      status: options.status,
      timeout: options.timeout,
    }),
  }
);

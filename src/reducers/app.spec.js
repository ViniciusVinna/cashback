import { AppConstants, PurchasesConstants, UserConstants } from 'constants/index';
import { reducers } from 'reducers';

import {
  hideAlert,
  setScreenSize,
  showAlert,
  toggleDialog,
  toggleDrawer,
} from 'actions';

describe('reducers/app', () => {
  describe('HIDE_ALERT', () => {
    it(`should handle ${AppConstants.HIDE_ALERT}`, () => {
      let state = reducers.app(undefined, showAlert('hello', { id: 'ABC1', type: 'success' }));
      state = reducers.app(state, hideAlert('ABC1'));

      expect(state.alerts).toHaveLength(0);
    });
  });

  describe('SET_DIALOG_VISIBILITY', () => {
    it(`should handle ${AppConstants.SET_DIALOG_VISIBILITY}`, () => {
      const state = reducers.app(undefined, toggleDialog(true));

      expect(state.isDialogOpen).toBeTrue();
    });
  });

  describe('SET_DRAWER_VISIBILITY', () => {
    it(`should handle ${AppConstants.SET_DRAWER_VISIBILITY}`, () => {
      const state = reducers.app(undefined, toggleDrawer(true));

      expect(state.isDrawerOpen).toBeTrue();
    });
  });

  describe('SET_SCREEN_SIZE', () => {
    it(`should handle ${AppConstants.SET_SCREEN_SIZE}`, () => {
      const state = reducers.app(undefined, setScreenSize('medium'));

      expect(state.screenSize).toBe('medium');
    });
  });

  describe('SHOW_ALERT', () => {
    it(`should handle ${AppConstants.SHOW_ALERT}`, () => {
      const state = reducers.app(undefined, showAlert('hello', { id: 'ABC1', type: 'success' }));

      expect(state.alerts).toHaveLength(1);
      expect(state.alerts[0].message).toBe('hello');
    });
  });

  describe('USER_CREATE_SUCCESS', () => {
    it(`should handle ${UserConstants.USER_CREATE_SUCCESS}`, () => {
      const state = reducers.app(undefined, { type: UserConstants.USER_CREATE_SUCCESS });

      expect(state.isDrawerOpen).toBeFalse();
      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });

  describe('USER_CREATE_FAILURE', () => {
    it(`should handle ${UserConstants.USER_CREATE_FAILURE}`, () => {
      const state = reducers.app(undefined, { type: UserConstants.USER_CREATE_FAILURE });

      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });

  describe('USER_FETCH_SUCCESS', () => {
    it(`should handle ${UserConstants.USER_FETCH_SUCCESS}`, () => {
      const state = reducers.app(undefined, { type: UserConstants.USER_FETCH_SUCCESS });

      expect(state.isDrawerOpen).toBeFalse();
      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });

  describe('USER_FETCH_FAILURE', () => {
    it(`should handle ${UserConstants.USER_FETCH_FAILURE}`, () => {
      const state = reducers.app(undefined, { type: UserConstants.USER_FETCH_FAILURE });

      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });

  describe('PURCHASES_FETCH_REQUEST', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_FETCH_REQUEST}`, () => {
      const state = reducers.app(undefined, { type: PurchasesConstants.PURCHASES_FETCH_REQUEST });

      expect(state.isDrawerOpen).toBeFalse();
      expect(state.isLoading).toBeTrue();
      expect(state.statusMessage).toBe('Carregando compras...');
    });
  });

  describe('PURCHASES_FETCH_SUCCESS', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_FETCH_SUCCESS}`, () => {
      const state = reducers.app(undefined, { type: PurchasesConstants.PURCHASES_FETCH_SUCCESS });

      expect(state.isDrawerOpen).toBeFalse();
      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });

  describe('PURCHASES_FETCH_FAILURE', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_FETCH_FAILURE}`, () => {
      const state = reducers.app(undefined, { type: PurchasesConstants.PURCHASES_FETCH_FAILURE });

      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });

  describe('PURCHASES_CREATE_SUCCESS', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_CREATE_SUCCESS}`, () => {
      const state = reducers.app(undefined, { type: PurchasesConstants.PURCHASES_CREATE_SUCCESS });

      expect(state.isDialogOpen).toBeFalse();
      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });

  describe('PURCHASES_CREATE_FAILURE', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_CREATE_FAILURE}`, () => {
      const state = reducers.app(undefined, { type: PurchasesConstants.PURCHASES_CREATE_FAILURE });

      expect(state.isLoading).toBeFalse();
      expect(state.isScrollLocked).toBeFalse();
    });
  });
});

import { PurchasesConstants, STATUS } from 'constants/index';
import { reducers } from 'reducers';

import {
  getPurchases,
  createPurchase,
  setDetails,
} from 'actions';

import purchasesMock from './__mocks__/purchases.json';

describe('reducers/app', () => {
  describe('PURCHASES_FETCH_REQUEST', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_FETCH_REQUEST}`, () => {
      const state = reducers.purchases(undefined, getPurchases());

      expect(state.fetch.message).toBe('');
      expect(state.fetch.status).toBe(STATUS.RUNNING);
    });
  });

  describe('PURCHASES_FETCH_SUCCESS', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_FETCH_SUCCESS}`, () => {
      const state = reducers.purchases(undefined, {
        type: PurchasesConstants.PURCHASES_FETCH_SUCCESS,
        payload: purchasesMock,
      });

      expect(state.balance).toEqual(purchasesMock.balance);
      expect(state.data).toEqual(purchasesMock.data);
      expect(state.validation).toBe(purchasesMock.validation);
      expect(state.fetch.status).toBe(STATUS.SUCCESS);
    });
  });

  describe('PURCHASES_FETCH_FAILURE', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_FETCH_FAILURE}`, () => {
      const state = reducers.purchases(undefined, {
        type: PurchasesConstants.PURCHASES_FETCH_FAILURE,
        payload: { message: 'Fail' },
      });

      expect(state.fetch.message).toBe('Fail');
      expect(state.fetch.status).toBe(STATUS.ERROR);
    });
  });

  describe('PURCHASES_CREATE_REQUEST', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_CREATE_REQUEST}`, () => {
      const state = reducers.purchases(undefined, createPurchase({
        data: '2020-09-09',
        code: '123456789',
        value: '5000',
      }));

      expect(state.create.status).toBe(STATUS.RUNNING);
    });
  });

  describe('PURCHASES_CREATE_SUCCESS', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_CREATE_SUCCESS}`, () => {
      const state = reducers.purchases(undefined, {
        type: PurchasesConstants.PURCHASES_CREATE_SUCCESS,
        payload: purchasesMock,
      });

      expect(state.create.status).toBe(STATUS.SUCCESS);
    });
  });

  describe('PURCHASES_CREATE_FAILURE', () => {
    it(`should handle ${PurchasesConstants.PURCHASES_CREATE_FAILURE}`, () => {
      const state = reducers.purchases(undefined, {
        type: PurchasesConstants.PURCHASES_CREATE_FAILURE,
        payload: { message: 'Fail' },
      });

      expect(state.create.message).toBe('Fail');
      expect(state.create.status).toBe(STATUS.ERROR);
    });
  });

  describe('SET_DETAILS', () => {
    it(`should handle ${PurchasesConstants.SET_DETAILS}`, () => {
      const initialState = purchasesMock;

      const state = reducers.purchases(initialState, setDetails('13'));

      expect(state.details).toEqual(purchasesMock.details);
    });
  });
});

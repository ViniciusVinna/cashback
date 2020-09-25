import React from 'react';
import { useSelector } from 'react-redux';

import Transactions from './Transactions';
import Details from './Details';

import transactionsMock from './__mocks__/transactions.json';

const mockStore = {
  app: {},
  purchases: transactionsMock,
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Transactions', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockStore));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  describe('List without interactions', () => {
    it('it should render properly', () => {
      const { container } = render(
        <Transactions />
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('List item itenteractions', () => {
    it('it should activate the list item when click', () => {
      const { container, getByText } = setupRender(<Transactions />, 'transactions');
      fireEvent.click(getByText('123131231'));

      expect(container).toMatchSnapshot();
    });
  });

  describe('Transaction Detail', () => {
    it('it should render properly with all props', () => {
      const { container } = render(<Details />);
      expect(container).toMatchSnapshot();
    });
  });
});

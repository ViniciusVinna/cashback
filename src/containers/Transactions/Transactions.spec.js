import React from 'react';
import Transactions from './Transactions';
import Details from './Details';

describe('Transactions', () => {
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
      const { container, getByTestId, getByText } = setupRender(<Transactions />, 'transactions');
      fireEvent.click(getByText('123456789'));

      fireEvent.click(getByTestId('close-drawer'));

      fireEvent.click(getByText('123456789'));

      expect(container).toMatchSnapshot();
    });
  });

  describe('Transaction Detail', () => {
    it('it should render properly with all props', () => {
      const details = {
        id: '1',
        code: '123456',
        value: 'R$ 25,00',
        date: '1600623109000',
        time: '1600623109000',
        status: 'APROVADO',
        cashback: 'R$ 5,00',
        percentage: '2%',
        reason: 'Status aprovado pelo valor da compra',
      };

      const { container } = render(
        <Details details={details} />
      );
      expect(container).toMatchSnapshot();
    });

    it('it should render properly with nullish props', () => {
      const details = {
        id: '1',
        code: '123456',
        value: 'R$ 25,00',
        date: '1600623109000',
        time: '1600623109000',
        status: 'APROVADO',
        cashback: 'R$ 5,00',
        percentage: '2%',
        reason: 'Status aprovado pelo valor da compra',
        noEntryProp: 'noEntryProp',
      };

      const { container } = render(
        <Details details={details} />
      );
      expect(container).toMatchSnapshot();
    });
  });
});

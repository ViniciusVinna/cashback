import React from 'react';
import { LoginForm } from './LoginForm';
import { PurchaseForm } from './PurchaseForm';
import { SigninForm } from './SigninForm';

describe('Forms', () => {
  describe('LoginForm', () => {
    it('should render properly', () => {
      const { container } = render(<LoginForm />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('PurchaseForm', () => {
    it('should render properly', () => {
      const { container } = render(<PurchaseForm />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('SigninForm', () => {
    it('should render properly', () => {
      const { container } = render(<SigninForm />);
      expect(container).toMatchSnapshot();
    });
  });
});

import React from 'react';
import Input from './Input';
import Submit from './Submit';

describe('Input', () => {
  describe('Input fields', () => {
    it('it should render the input with no icons', () => {
      const { container } = render(
        <Input name="test" type="text" defaultValue="test value" />
      );

      expect(container).toMatchSnapshot();
    });

    it('it should render the email input', () => {
      const { container } = render(
        <Input name="email" type="email" defaultValue="test value" />
      );

      expect(container).toMatchSnapshot();
    });

    it('it should render the password input', () => {
      const { container } = render(
        <Input name="password" type="password" defaultValue="test value" />
      );

      expect(container).toMatchSnapshot();
    });

    it('it should render the cpf input', () => {
      const { container } = render(
        <Input name="cpf" type="text" defaultValue="test value" />
      );

      expect(container).toMatchSnapshot();
    });

    it('it should render the username input', () => {
      const { container } = render(
        <Input name="username" type="text" defaultValue="test value" />
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Submit field', () => {
    it('it should render the default submit', () => {
      const { container } = render(
        <Submit>Submit Default</Submit>
      );

      expect(container).toMatchSnapshot();
    });

    it('it should render the disabled submit', () => {
      const { container } = render(
        <Submit disabled={true}>Submit Disabled</Submit>
      );

      expect(container).toMatchSnapshot();
    });
  });
});

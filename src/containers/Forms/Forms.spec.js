import React from 'react';
import { useSelector } from 'react-redux';
import { STATUS } from 'constants/index';

import { LoginForm } from './LoginForm';
import { PurchaseForm } from './PurchaseForm';
import { SigninForm } from './SigninForm';

const mockStore = {
  app: {
    isLoading: false,
  },
  purchases: {
    create: {
      data: {},
      status: STATUS.IDLE,
    },
  },
  user: {
    create: {
      data: {
        email: '',
        password: '',
      },
      status: STATUS.IDLE,
    },
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Forms', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockStore));
    jest.useFakeTimers();
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  describe('LoginForm', () => {
    it('should render with empty inputs', () => {
      const { container } = render(<LoginForm />);
      expect(container).toMatchSnapshot();
    });

    it('should render validation errors when inputs are empty', async () => {
      const { container, getByText } = render(<LoginForm />, 'login-form');

      await act(async () => {
        fireEvent.click(getByText('Entrar'));
      });

      expect(container).toMatchSnapshot();
    });

    it('should submit form without errors', async () => {
      const mockData = {
        email: 'user@gmail.com',
        password: '123456',
      };

      const { container, getByText, getByPlaceholderText } = render(<LoginForm />, 'login-form');

      const email = getByPlaceholderText('digite seu email...');
      const password = getByPlaceholderText('digite sua senha...');
      const submit = getByText('Entrar');

      fireEvent.input(email, {
        target: {
          value: mockData.email,
        },
      });

      fireEvent.input(password, {
        target: {
          value: mockData.password,
        },
      });

      await act(async () => {
        fireEvent.submit(submit);
      });

      expect(email.value).toEqual(mockData.email);
      expect(password.value).toEqual(mockData.password);
      expect(container).toMatchSnapshot();
    });
  });

  describe('PurchaseForm', () => {
    it('should render with empty inputs', () => {
      const { container } = render(<PurchaseForm />);
      expect(container).toMatchSnapshot();
    });

    it('should render validation errors when inputs are empty', async () => {
      const { container, getByText } = render(<PurchaseForm />, 'purchase-form');

      await act(async () => {
        fireEvent.click(getByText('Finalizar Cadastro'));
      });

      expect(container).toMatchSnapshot();
    });

    it('should submit form without errors', async () => {
      const { container, getByText, getByPlaceholderText } = render(<PurchaseForm />, 'purchase-form');

      const value = getByPlaceholderText('00,00');
      const code = getByPlaceholderText('000000000000');
      const date = getByPlaceholderText('00/00/0000');
      const submit = getByText('Finalizar Cadastro');

      fireEvent.input(value, {
        target: {
          value: 'R$ 450,00',
        },
      });

      fireEvent.input(code, {
        target: {
          value: '123456789',
        },
      });

      fireEvent.input(date, {
        target: {
          value: '2020-09-29',
        },
      });

      await act(async () => {
        fireEvent.submit(submit);
      });

      expect(container).toMatchSnapshot();
    });
  });

  describe('SigninForm', () => {
    it('should render with empty inputs', () => {
      const { container } = render(<SigninForm />);
      expect(container).toMatchSnapshot();
    });

    it('should render validation errors when inputs are empty', async () => {
      const { container, getByText } = render(<SigninForm />, 'login-form');

      await act(async () => {
        fireEvent.click(getByText('Criar Conta'));
      });

      expect(container).toMatchSnapshot();
    });

    it('should submit form without errors', async () => {
      const mockData = {
        email: 'johndoe@gmail.com',
        cpf: '11122233345',
        username: 'John Doe',
        password: '123456',
      };

      const { container, getByText, getByPlaceholderText } = render(<SigninForm />, 'login-form');

      const cpf = getByPlaceholderText('000.000.000-00');
      const email = getByPlaceholderText('digite seu email...');
      const password = getByPlaceholderText('digite sua senha...');
      const username = getByPlaceholderText('digite seu nome...');
      const submit = getByText('Criar Conta');

      fireEvent.input(cpf, {
        target: {
          value: mockData.cpf,
        },
      });

      fireEvent.input(username, {
        target: {
          value: mockData.username,
        },
      });

      fireEvent.input(email, {
        target: {
          value: mockData.email,
        },
      });

      fireEvent.input(password, {
        target: {
          value: mockData.password,
        },
      });

      await act(async () => {
        fireEvent.submit(submit);
      });
      expect(container).toMatchSnapshot();
    });
  });
});

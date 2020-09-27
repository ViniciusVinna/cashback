import React from 'react';
import { useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute';

let mockStore = {
  user: {
    isLogged: false,
    accessToken: '',
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('PrivateRoute', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockStore));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('it should redirect to /', () => {
    const { container } = render(
      <PrivateRoute path="/dashboard">
        <div>Dashboard Content</div>
      </PrivateRoute>
    );
    expect(container).toMatchSnapshot();
  });

  it('it should redirect to Dashboard when user is logged and has an access token', () => {
    mockStore = {
      user: {
        isLogged: true,
        accessToken: true,
      },
    };

    const { container } = render(
      <PrivateRoute path="/dashboard">
        <div>Dashboard Content</div>
      </PrivateRoute>
    );
    expect(container).toMatchSnapshot();
  });
});

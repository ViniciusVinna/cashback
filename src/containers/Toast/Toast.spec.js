import React from 'react';
import { useSelector } from 'react-redux';

import Toast from './index';

const mockState = {
  app: {
    alerts: [{
      id: 'fc9fd406-eab0-4ea9-b35b-7d4a85515892',
      message: 'Copied 7520733929 to clipboard',
      position: 'BOTTOM_CENTER',
      status: 'info',
      timeout: 1500,
    }],
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Toast Component', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockState));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('it should render properly', () => {
    const { container } = setupRender(<Toast />, 'toast');
    expect(container).toMatchSnapshot();
  });
});

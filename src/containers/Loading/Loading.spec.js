import React from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading';

let mockStore = {
  app: {
    isLoading: false,
    isScrollLocked: false,
    statusMessage: false,
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Loading', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockStore));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('it should not render Loading', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it('it should render Loading when isLoading is defined', () => {
    mockStore = {
      app: {
        isLoading: true,
        isScrollLocked: true,
        statusMessage: 'Carregando dados',
      },
    };

    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});

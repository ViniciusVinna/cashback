import React from 'react';
import { useSelector } from 'react-redux';
import Drawer from './Drawer';

let mockStore = {
  app: {
    isDrawerVisible: false,
  },
  purchases: {},
  user: {},
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Drawer', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockStore));
    jest.useFakeTimers();
  });
  
  afterEach(() => {
    useSelector.mockClear();
  });

  it('it should render properly', () => {
    const { container, debug } = render(
      <Drawer title="Drawer Closed">
        Child
      </Drawer>
    );

    debug();
    expect(container).toMatchSnapshot();
  });

  it('Should close the drawer when it`s open', () => {
    mockStore = {
      app: {
        isDrawerVisible: true,
      },
      purchases: {},
      user: {},
    };

    const { container, getByTestId } = render(
      <Drawer title="Drawer Opened">
        Child
      </Drawer>
    );

    const closeButton = getByTestId('close-drawer');

    fireEvent.click(closeButton);

    expect(container).toMatchSnapshot();
  });
});

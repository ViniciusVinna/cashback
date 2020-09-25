import React from 'react';
import { useSelector } from 'react-redux';

import Dialog from './Dialog';

let mockStore = {
  app: {
    screenSize: '',
    isDialogOpen: false,
    isScrollLocked: false,
  },
  purchases: {},
  user: {},
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const props = {
  renderComponent: <div>Trigger Component</div>,
  title: 'Something title',
};

describe('Dialog', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockStore));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  describe('Dialog', () => {
    it('should render just the trigger component of dialog ', () => {
      const { container } = render(<Dialog {...props}>Child</Dialog>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Dialog', () => {
    it('should render the dialog and its content ', () => {
      mockStore = {
        ...mockStore,
        app: {
          isDialogOpen: true,
          isScrollLocked: true,
        },
      };

      const { getByText } = setupRender(<Dialog {...props}>Child</Dialog>, 'dialog');

      expect(getByText('Something title')).toBeDefined();
      expect(getByText('Child')).toBeDefined();
    });

    it('should end the dialog when click on the close button', () => {
      const { container, getByTestId } = setupRender(<Dialog {...props}>Child</Dialog>, 'dialog');

      fireEvent.click(getByTestId('dialog-close'));

      expect(container).toMatchSnapshot();
    });

    it('should end the dialog when esc key is pressed', () => {
      const { container } = setupRender(<Dialog {...props}>Child</Dialog>, 'dialog');

      fireEvent.keyUp(container, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });

      expect(container).toMatchSnapshot();
    });
  });
});

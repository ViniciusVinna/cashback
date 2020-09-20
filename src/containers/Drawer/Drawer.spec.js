import React from 'react';
import Drawer from './Drawer';

const mockDispatch = jest.fn();

const props = {
  children: <div>child</div>,
  isDrawerActive: true,
  onClose: mockDispatch,
  title: 'Drawer Title',
};

const setup = (ownProps = props) => {
  const {
    getByTestId,
    getByText,
    queryByTestId,
  } = render(<Drawer {...ownProps} />);

  const container = getByTestId('drawer');

  return {
    container,
    getByTestId,
    getByText,
    queryByTestId,
  };
};

describe('Drawer', () => {
  describe('basic functionality', () => {
    it('it should be a render children', () => {
      const { container } = setup();
      expect(container).toMatchSnapshot();
    });
  });
});

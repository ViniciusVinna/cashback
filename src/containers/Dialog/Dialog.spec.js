import React from 'react';
import Dialog from './Dialog';

const props = {
  children: 'Something',
  isVisible: true,
  onCloseHandler: () => {},
  onConfirmHandler: () => {},
  renderComponent: <div>Trigger Component</div>,
  title: 'Something title',
};

describe('Dialog', () => {
  describe('no interactions', () => {
    it('should render properly', () => {
      const { container } = render(
        <Dialog {...props}>
          You are my father
        </Dialog>
      );
      expect(container).toMatchSnapshot();
    });

    it('it should render child properly', () => {
      const { getByText } = render(
        <Dialog {...props}>
          You are my father
        </Dialog>
      );
      expect(getByText('You are my father')).toBeDefined();
      expect(getByText('Something title')).toBeDefined();
    });
  });

  describe('interactions', () => {
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

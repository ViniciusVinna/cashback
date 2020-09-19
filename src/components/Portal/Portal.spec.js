import React from 'react';
import ReactDOM from 'react-dom';

import Portal from './Portal';

describe('Portal', () => {
  describe('styles', () => {
    it('should render with default styles', () => {
      ReactDOM.createPortal = node => node;
      const { container } = render(<Portal>child</Portal>);
      expect(container).toMatchSnapshot();
    });
  });
});

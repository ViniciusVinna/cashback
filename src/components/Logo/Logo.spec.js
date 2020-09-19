import React from 'react';
import Logo from './index';

const defaultProps = {
  expanded: true,
  inTopbar: false,
};

const setup = (ownProps = defaultProps) => {
  const {
    getByTestId,
    getByText,
  } = render(<Logo {...ownProps} />);

  const container = getByTestId('logo');

  return {
    container,
    getByText,
  };
};

describe('Logo Component', () => {
  describe('basic functionality', () => {
    it('should render a logo component', () => {
      const { getByText } = setup();

      expect(getByText('bankoffice-logo.svg')).toBeDefined();
    });

    it('should render a short logo component', () => {
      const props = {
        inTopbar: true,
        expanded: true,
      };
      const { getByText } = setup(props);

      expect(getByText('bankoffice-logo-inverse.svg')).toBeDefined();
    });

    it('should render a logo inverse component', () => {
      const props = {
        inTopbar: true,
        expanded: false,
      };
      const { getByText } = setup(props);

      expect(getByText('logotype.svg')).toBeDefined();
    });
  });
});

import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
  it('should render the default sign logo when no props is declared', async () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });

  it('should render the group-light logo', async () => {
    const { container } = render(<Logo type="group-light" />);

    expect(container).toMatchSnapshot();
  });

  it('should render the group-dark logo', async () => {
    const { container } = render(<Logo type="group-dark" />);

    expect(container).toMatchSnapshot();
  });
});

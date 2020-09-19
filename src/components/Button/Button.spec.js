import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('it should render the default button when no props is declared', () => {
    const { container } = render(<Button>Default Button</Button>);

    expect(container).toMatchSnapshot();
  });

  it('it should render the primary button', () => {
    const { container } = render(<Button variation="primary">Primary Button</Button>);

    expect(container).toMatchSnapshot();
  });

  it('it should render the secondary button', () => {
    const { container } = render(<Button variation="secondary">Secondary Button</Button>);

    expect(container).toMatchSnapshot();
  });
});

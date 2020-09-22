import React from 'react';
import Login from './Login';

describe('Login', () => {
  it('it should render properly', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});

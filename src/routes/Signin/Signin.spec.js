import React from 'react';
import Signin from './Signin';

describe('Dashboard', () => {
  it('it should render properly', () => {
    const { container } = render(<Signin />);
    expect(container).toMatchSnapshot();
  });
});

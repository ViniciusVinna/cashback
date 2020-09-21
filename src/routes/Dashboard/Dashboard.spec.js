import React from 'react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('it should render properly', () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});

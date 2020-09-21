import React from 'react';
import App from './App';

describe('App', () => {
  it('it should render properly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

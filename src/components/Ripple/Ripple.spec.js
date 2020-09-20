import React from 'react';
import Ripple from './Ripple';

describe('Ripple', () => {
  it('should render properly', async () => {
    const { container } = await render(<Ripple />);

    expect(container).toMatchSnapshot();
  });
});

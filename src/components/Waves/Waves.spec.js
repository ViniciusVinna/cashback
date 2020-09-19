import React from 'react';
import Waves from './Waves';

describe('Waves', () => {
  it('it should render properly', () => {
    const { container } = render(<Waves />);

    expect(container).toMatchSnapshot();
  });
});

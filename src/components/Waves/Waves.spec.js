import React from 'react';
import Waves from './Waves';

describe('Waves', () => {
  it('it should render properly with the default color', () => {
    const { container } = render(<Waves />);

    expect(container).toMatchSnapshot();
  });

  it('it should render properly with the custom color', () => {
    const { container } = render(<Waves color="#00000" />);

    expect(container).toMatchSnapshot();
  });
});

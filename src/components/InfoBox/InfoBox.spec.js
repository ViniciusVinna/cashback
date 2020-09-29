import React from 'react';
import InfoBox from './InfoBox';

describe('InfoBox', () => {
  it('it should render properly', () => {
    const { container } = render(<InfoBox />);

    expect(container).toMatchSnapshot();
  });
});

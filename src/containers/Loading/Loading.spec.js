import React from 'react';

import Loading from './Loading';

describe('Loading', () => {
  it('it should render properly', () => {
    const { container } = render(
      <Loading />
    );
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';

import AddPurchase from './AddPurchase';

describe('AddPurchase', () => {
  it('it should render properly', () => {
    const { container } = render(
      <AddPurchase />
    );
    expect(container).toMatchSnapshot();
  });
});

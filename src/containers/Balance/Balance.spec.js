import React from 'react';

import Balance from './Balance';

describe('Balance', () => {
  it('it should render properly', () => {
    const { container } = render(
      <Balance
        balance="R$ 450,00"
        approved="R$ 72,00"
        pending="R$ 45,00"
      />
    );
    expect(container).toMatchSnapshot();
  });
});

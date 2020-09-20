import React from 'react';
import Drawer from './Drawer';

const props = {
  children: <div>child</div>,
  isVisible: true,
  onCloseHandler: () => {},
  title: 'Drawer Title',
};

describe('Drawer', () => {
  it('it should render properly', () => {
    const { container } = render(
      <Drawer {...props} />
    );
    expect(container).toMatchSnapshot();
  });
});

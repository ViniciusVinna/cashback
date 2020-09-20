import React from 'react';

import profileFallbackImage from 'assets/avatars/avatar-1.svg';

import Profile from './Profile';

describe('Profile', () => {
  it('it should render properly', () => {
    const { container } = render(
      <Profile userImg={profileFallbackImage} username="Vinícius Ribeiro" />
    );
    expect(container).toMatchSnapshot();
  });
});

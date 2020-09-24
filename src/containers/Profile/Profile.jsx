import React from 'react';
import { useSelector } from 'react-redux';

import Heading from 'components/Heading';
import Logo from 'components/Logo';

import defaultImage from 'assets/avatars/avatar-2.svg';

import { ProfileStyled } from './Profile.styles';

const { Avatar, ProfileBrand, ProfileWrapper, Username } = ProfileStyled;

const Profile = () => {
  const { data: { firstname = '' } } = useSelector(state => state.user);

  return (
    <ProfileWrapper data-testid="profile">
      <ProfileBrand>
        <Logo type="sign" />
      </ProfileBrand>
      <Username>
        <Heading level="h6">
          {firstname}
        </Heading>
      </Username>

      <Avatar>
        <img src={defaultImage} alt="Imagem de perfil" />
      </Avatar>
    </ProfileWrapper>
  );
};

export default Profile;

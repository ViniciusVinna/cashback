import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Heading';
import Logo from 'components/Logo';

import defaultImage from 'assets/avatars/avatar-2.svg';

import { ProfileStyled } from './Profile.styles';

const { Avatar, ProfileBrand, ProfileWrapper, Username } = ProfileStyled;

const Profile = ({ userImg, username }) => (
  <ProfileWrapper data-testid="profile">
    <ProfileBrand>
      <Logo type="sign" />
    </ProfileBrand>
    <Username>
      <Heading level="h6">
        {username}
      </Heading>
    </Username>

    <Avatar>
      <img src={userImg} alt="Imagem de perfil" />
    </Avatar>
  </ProfileWrapper>
);

Profile.propTypes = {
  userImg: PropTypes.string,
  username: PropTypes.string,
};

Profile.defaultProps = {
  userImg: defaultImage,
  username: 'Vinícius Ribeiro',
};

export default Profile;

import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Heading';

import defaultImage from 'assets/avatars/avatar-2.svg';

import { ProfileStyled } from './Profile.styles';

const { Avatar, ProfileWrapper, Username } = ProfileStyled;

const Profile = ({ userImg, username }) => (
  <ProfileWrapper data-testid="profile">
    <Avatar>
      <img src={userImg} alt="Imagem de perfil" />
    </Avatar>

    <Username>
      <Heading level="h6">
        {username}
      </Heading>
    </Username>
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

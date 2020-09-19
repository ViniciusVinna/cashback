import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as GroupBrandDark } from 'assets/brands/group-logo-dark-mode.svg';
import { ReactComponent as GroupBrandLight } from 'assets/brands/group-logo-light-mode.svg';
import { ReactComponent as GroupSign } from 'assets/brands/sign.svg';

import { LogoStyled } from './Logo.styles';

const { LogoWrapper } = LogoStyled;

const Logo = ({ type }) => {
  let output;

  if (type === 'sign') {
    output = (<GroupSign preserveAspectRatio="xMidYMid slice" />);
  }
  else if (type === 'group-light') {
    output = (<GroupBrandLight preserveAspectRatio="xMidYMid slice" />);
  }
  else if (type === 'group-dark') {
    output = (<GroupBrandDark preserveAspectRatio="xMidYMid slice" />);
  }

  return (
    <LogoWrapper data-testid="logo">
      {output}
    </LogoWrapper>
  );
};

Logo.propTypes = {
  type: PropTypes.string,
};

Logo.defaultProps = {
  type: 'sign',
};

export default Logo;

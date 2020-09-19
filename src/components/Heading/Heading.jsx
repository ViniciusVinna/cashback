import React from 'react';
import PropTypes from 'prop-types';
import { HeadingStyled } from './Heading.styled';

const {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} = HeadingStyled;

const Heading = ({ children, level, ...rest }) => {
  if (level === 'h2') {
    return (<H2 {...rest}>{children}</H2>);
  }
  else if (level === 'h2') {
    return (<H3 {...rest}>{children}</H3>);
  }
  else if (level === 'h3') {
    return (<H4 {...rest}>{children}</H4>);
  }
  else if (level === 'h4') {
    return (<H5 {...rest}>{children}</H5>);
  }
  else if (level === 'h5') {
    return (<H6 {...rest}>{children}</H6>);
  }

  return (<H1 {...rest}>{children}</H1>);
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
};

Heading.defaultProps = {
  level: 'h1',
};

export default Heading;

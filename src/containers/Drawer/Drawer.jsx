import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Heading';
import Waves from 'components/Waves';

import { DrawerStyled } from './Drawer.styled';

const {
  BackIcon,
  Content,
  DrawerWrapper,
  Header,
  HeaderContainer,
  Overlay,
} = DrawerStyled;

const Drawer = ({ children, extraPadding, isVisible, onClose, title }) => (
  <Fragment>
    <DrawerWrapper isVisible={isVisible} data-testid="drawer">
      <Header>
        <HeaderContainer>
          <BackIcon data-testid="close-drawer" onClick={onClose} />
          <Heading level="h4">{title}</Heading>
        </HeaderContainer>
        <Waves />
      </Header>

      <Content extraPadding={extraPadding}>
        {children}
      </Content>
    </DrawerWrapper>

    <Overlay
      onClick={onClose}
      isVisible={isVisible}
    />
  </Fragment>
);

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  extraPadding: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Drawer.defaultProps = {
  extraPadding: false,
};

export default Drawer;

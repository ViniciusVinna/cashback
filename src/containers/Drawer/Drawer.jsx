import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Heading';
import Waves from 'components/Waves';

import { DrawerStyled } from './Drawer.styles';

const {
  BackIcon,
  Content,
  DrawerWrapper,
  Header,
  HeaderContainer,
  Overlay,
} = DrawerStyled;

const Drawer = ({ children, isVisible, onCloseHandler, title }) => (
  <Fragment>
    <DrawerWrapper isVisible={isVisible} data-testid="drawer">
      <Header>
        <HeaderContainer>
          <BackIcon data-testid="close-drawer" onClick={onCloseHandler} />
          <Heading level="h4">{title}</Heading>
        </HeaderContainer>
        <Waves />
      </Header>

      <Content>
        {children}
      </Content>
    </DrawerWrapper>

    <Overlay
      onClick={onCloseHandler}
      isVisible={isVisible}
    />
  </Fragment>
);

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Drawer;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { toggleDrawer } from 'actions';

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

const Drawer = ({ children, extraPadding, title }) => {
  const { isDrawerOpen } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleDrawer(false));
  };

  return (
    <Fragment>
      <DrawerWrapper isOpen={isDrawerOpen} data-testid="drawer">
        <Header>
          <HeaderContainer>
            <BackIcon data-testid="close-drawer" onClick={handleClose} />
            <Heading level="h4">{title}</Heading>
          </HeaderContainer>
          <Waves />
        </Header>

        <Content extraPadding={extraPadding}>
          {children}
        </Content>
      </DrawerWrapper>

      <Overlay
        onClick={handleClose}
        isOpen={isDrawerOpen}
      />
    </Fragment>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  extraPadding: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Drawer.defaultProps = {
  extraPadding: false,
};

export default Drawer;

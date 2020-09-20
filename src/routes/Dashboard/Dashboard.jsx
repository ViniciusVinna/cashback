import React from 'react';

import Waves from 'components/Waves';

import Balance from 'containers/Balance';
import Drawer from 'containers/Drawer';
import Profile from 'containers/Profile';
import Transactions from 'containers/Transactions';

import { useDrawer } from 'hooks';

import SignInStyled from './Dashboard.styled';

const {
  DashboardPage,
  Content,
  Header,
  HeaderWrapper,
} = SignInStyled;

const Dashboard = () => {
  const [isVisible, setVisibility] = useDrawer();

  return (
    <DashboardPage data-testid="signin">
      <Header>
        <HeaderWrapper>
          <Profile />
          <Balance />
        </HeaderWrapper>
      </Header>
      <Waves />

      <Content>
        <Transactions />
      </Content>

      <Drawer
        isVisible={isVisible}
        onCloseHandler={() => setVisibility(false)}
        title="Informações de compra"
      >
        <p>Informações de compra</p>
      </Drawer>
    </DashboardPage>
  );
};

export default Dashboard;

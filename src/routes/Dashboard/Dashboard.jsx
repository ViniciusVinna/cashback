import React, { useState, useRef, useEffect } from 'react';

import Waves from 'components/Waves';

import AddPurchase from 'containers/AddPurchase';
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
  const [purchaseHeight, setPurchaseHeight] = useState('0px');
  const addPurchaseRef = useRef(null);

  useEffect(() => {
    const height = addPurchaseRef?.current?.offsetHeight || 0;

    /* istanbul ignore else */
    if (height && height > 0) {
      const paddingHeight = `${height * 2}px`;

      setPurchaseHeight(paddingHeight);
    }
  }, [purchaseHeight, addPurchaseRef]);

  return (
    <DashboardPage
      data-testid="dashboard"
      style={{ paddingBottom: `${purchaseHeight}` }}
    >
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

      <AddPurchase ref={addPurchaseRef} />

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

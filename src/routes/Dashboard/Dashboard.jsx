import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getPurchases, toggleDialog } from 'actions';

import Waves from 'components/Waves';

import AddPurchase from 'containers/AddPurchase';
import Balance from 'containers/Balance';
import Dialog from 'containers/Dialog';
import Drawer from 'containers/Drawer';
import Profile from 'containers/Profile';
import Transactions from 'containers/Transactions';
import Details from 'containers/Transactions/Details';
import { PurchaseForm } from 'containers/Forms';

import SignInStyled from './Dashboard.styled';

const {
  DashboardPage,
  Content,
  Header,
  HeaderWrapper,
} = SignInStyled;

const Dashboard = () => {
  const [purchaseHeight, setPurchaseHeight] = useState('0px');
  const addPurchaseRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(toggleDialog(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

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

      <Dialog
        title="Cadastrar Compra"
        renderComponent={(
          <AddPurchase
            onClickHandler={handleClick}
            ref={addPurchaseRef}
          />
        )}
      >
        <PurchaseForm />
      </Dialog>

      <Drawer title="Detalhes da Compra">
        <Details />
      </Drawer>
    </DashboardPage>
  );
};

export default Dashboard;

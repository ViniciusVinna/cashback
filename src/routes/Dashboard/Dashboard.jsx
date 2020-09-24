import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPurchases } from 'actions';

import Waves from 'components/Waves';

import AddPurchase from 'containers/AddPurchase';
import Balance from 'containers/Balance';
import Dialog from 'containers/Dialog';
import Drawer from 'containers/Drawer';
import Profile from 'containers/Profile';
import Transactions from 'containers/Transactions';
import Details from 'containers/Transactions/Details';
import { PurchaseForm } from 'containers/Forms';

import { useDialog } from 'hooks';

import SignInStyled from './Dashboard.styled';

const {
  DashboardPage,
  Content,
  Header,
  HeaderWrapper,
} = SignInStyled;

const Dashboard = () => {
  const [isDialogVisible, setDialogVisibility, toggleDialog] = useDialog(false);
  const [purchaseHeight, setPurchaseHeight] = useState('0px');
  const addPurchaseRef = useRef(null);
  const dispatch = useDispatch();

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
        isVisible={isDialogVisible}
        onCloseHandler={() => setDialogVisibility(false)}
        title="Cadastrar Compra"
        renderComponent={(
          <AddPurchase
            onClickHandler={toggleDialog}
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

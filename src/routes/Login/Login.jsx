import React from 'react';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Logo from 'components/Logo';
import Waves from 'components/Waves';

import Drawer from 'containers/Drawer';
import { LoginForm, SigninForm } from 'containers/Forms';

import { useDrawer } from 'hooks';

import LoginStyled from './Login.styled';

const {
  LoginPage,
  Content,
  ContentGroup,
  Copyright,
  Header,
  HeaderWrapper,
} = LoginStyled;

const Login = () => {
  const [isVisible, setVisibility] = useDrawer();

  return (
    <LoginPage data-testid="signin">
      <ContentGroup>
        <Header>
          <HeaderWrapper>
            <Logo type="group-dark" />
          </HeaderWrapper>
          <Waves />
        </Header>

        <Content>
          <Heading level="h3">Login</Heading>
          <LoginForm />

          <Button
            variation="secondary"
            onClick={() => setVisibility(true)}
          >
            Criar conta
          </Button>
        </Content>

        <Copyright>
          Desenvolvido com
          <span role="img" aria-label="amor">❤️</span>
          por Vinna
        </Copyright>
      </ContentGroup>

      <Drawer
        isVisible={isVisible}
        onCloseHandler={() => setVisibility(false)}
        title="Criar conta"
      >
        <p>Cadastre-se e comece a ganhar cashback a partir de suas próximas compras!</p>
        <SigninForm />
      </Drawer>
    </LoginPage>
  );
};

export default Login;

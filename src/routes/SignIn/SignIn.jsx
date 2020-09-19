import React from 'react';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Logo from 'components/Logo';
import Waves from 'components/Waves';

import { LoginForm } from 'containers/Forms';

import SignInStyled from './SignIn.styled';

const {
  SigninPage,
  Content,
  ContentGroup,
  Copyright,
  Header,
  HeaderWrapper,
} = SignInStyled;

const Signin = () => (
  <SigninPage data-testid="signin">
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

        <Button variation="secondary">Criar conta</Button>
      </Content>

      <Copyright>
        Desenvolvido com
        <span role="img" aria-label="amor">❤️</span>
        por Vinna
      </Copyright>
    </ContentGroup>
  </SigninPage>
);

export default Signin;

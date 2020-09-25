import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';

import { useWindowSize } from 'hooks';

import { initAuthClient } from 'modules';

import Routes from 'routes';

import Loading from 'containers/Loading';
import Toast from 'containers/Toast';

import { light } from 'style/theme';

import GlobalStyles from './App.styled';

const App = () => {
  const { pathname } = useLocation();

  useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    initAuthClient();
  }, []);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
      <Toast />
      <Loading />
    </ThemeProvider>
  );
};

export default App;

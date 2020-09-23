import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { useSelector } from 'react-redux';

import { initAuthClient } from 'modules';

import Routes from 'routes';

import Loading from 'containers/Loading';
import Toast from 'containers/Toast';

import { STATUS } from 'constants/index';

import { light } from 'style/theme';

import GlobalStyles from './App.styled';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const { fetch, create } = useSelector(state => state.user);

  useEffect(() => {
    initAuthClient();
  }, []);

  useEffect(() => {
    if (fetch.status === STATUS.RUNNING || fetch.create === STATUS.RUNNING) {
      setLoading(true);
    }
    else {
      setLoading(false);
    }
  }, [fetch, create]);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
      <Toast />
      <Loading isLoading={isLoading} />
    </ThemeProvider>
  );
};

export default App;

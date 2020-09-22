import React, { useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { history, initAuthClient } from 'modules';
import { persistor, store } from 'store';

import Routes from 'routes';

import { light } from 'style/theme';

import GlobalStyles from './App.styled';

const App = () => {
  useEffect(() => {
    initAuthClient();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={light}>
            <GlobalStyles />
            <Routes />
          </ThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;

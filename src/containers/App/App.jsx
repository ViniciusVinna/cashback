import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from 'store';

import { history } from 'modules';

import Routes from 'routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;

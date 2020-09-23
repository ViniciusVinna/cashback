import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

import { history } from 'modules';
import { persistor, store } from 'store';

import App from 'containers/App';

import * as serviceWorker from './config/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

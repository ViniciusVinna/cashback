import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

import { authClient } from 'modules';

import * as serviceWorker from './config/serviceWorker';

window.auth = authClient;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

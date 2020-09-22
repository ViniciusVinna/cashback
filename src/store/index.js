import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';

import { history } from 'modules';

import rootSagas from 'sagas';
import reducers from 'reducers';

const { NODE_ENV } = process.env;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'cashback',
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducer = persistReducer(
  persistConfig,
  reducers(history),
);

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
];

/* istanbul ignore next */
if (NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const invariant = require('redux-immutable-state-invariant').default;

  middleware.push(invariant());
  middleware.push(
    createLogger({
      collapsed: true,
      predicate: () => !window['HIDE_ACTIONS'],
    })
  );
}

const composeEnhancer =  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const configStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSagas);

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(reducer);
    });
  }

  return {
    persistor: persistStore(store),
    store,
  };
};

const { persistor, store } = configStore();

global.store = store;
export { persistor, store };

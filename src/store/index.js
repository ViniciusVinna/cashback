import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistReducer, persistStore } from 'redux-persist';

import { history } from 'modules';

import rootSagas from 'sagas';
import reducers from 'reducers';

const { NODE_ENV } = process.env;

const sagaMiddleware = createSagaMiddleware();
const routersMiddleware = routerMiddleware(history);

const middlewares = [routersMiddleware, sagaMiddleware];

/* istanbul ignore next */
if (NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const invariant = require('redux-immutable-state-invariant').default;

  middlewares.push(invariant());
  middlewares.push(
    createLogger({
      collapsed: true,
      predicate: () => !window['HIDE_ACTIONS'],
    })
  );
}

const persistConfig = {
  key: 'cashback',
  stateReconciler: autoMergeLevel2,
  storage,
};

const createAppReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

const createRootReducers = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    window.location.reload();
  }

  return createAppReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, createRootReducers);
const composeEnhancer =  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const configStore = (preloadedState = {}) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSagas);

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(persistedReducer);
    });
  }

  return { persistor, store };
};

const { persistor, store } = configStore();

global.store = store;

export { persistor, store };

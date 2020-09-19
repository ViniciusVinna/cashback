/* eslint-disable import/no-extraneous-dependencies, react/prop-types */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'babel-polyfill';
import 'jest-extended';
import 'jest-localstorage-mock';
import deepmerge from 'deepmerge';

import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import {
  act,
  cleanup,
  fireEvent,
  render as renderTest,
  screen,
  wait,
  waitFor,
} from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { light } from 'style/theme';
import { renderHook, act as actHook } from '@testing-library/react-hooks';

import reducers from 'reducers';
import packageJson from '../package.json';

const rootReducer = combineReducers(reducers);

export const WithProviders = ({
  children,
  initialState,
  store = createStore(rootReducer, initialState) || {},
}) => (
  <Provider store={store}>
    <MemoryRouter>
      <ThemeProvider theme={light}>
        {children}
      </ThemeProvider>
    </MemoryRouter>
  </Provider>
);

/**
 * @param {function} renderer
 * @returns {function(*): *}
 */
const renderWithProviders = (renderer) => (component) => renderer(<WithProviders>{component}</WithProviders>);

export const create = component => {
  const { container } = renderWithProviders(component);

  return container.children.length > 1
    ? container.children
    : container.firstChild;
};

/**
 * @param {ReactElement} ui
 * @param {object} initialState
 * @param {object} store
 * @param {object} renderOptions
 * @returns {*} RenderResult
 */
function renderWithRedux(
  ui,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }

  return renderTest(ui, { wrapper: Wrapper, ...renderOptions });
}

/**
 * @param {ReactElement} ui
 * @param {string} dataTestId
 * @returns {object}
 */
const setupRender = (ui, dataTestId) => {
  const { getByTestId, ...rest } = renderWithProviders(renderTest)(ui);
  const container = getByTestId(dataTestId);

  return {
    container,
    getByTestId,
    ...rest,
  };
};

global.Date.now = jest.fn(() => 1569873605000);
global.act = act;
global.actHook = actHook;
global.cleanup = cleanup;
global.create = create;
global.fireEvent = fireEvent;
global.render = renderWithProviders(renderTest);
global.renderHook = renderHook;
global.renderWithRedux = renderWithRedux;
global.screen = screen;
global.setupRender = setupRender;
global.wait = wait;
global.waitFor = waitFor;
global.sagaReducer = (options = {}) => {
  const defaultState = {
    app: {
      alerts: [],
      environment: 'development',
      screenSize: 'small',
      status: 'idle',
      version: packageJson.version,
    },
  };

  const state = deepmerge(defaultState, options);

  return () => state;
};

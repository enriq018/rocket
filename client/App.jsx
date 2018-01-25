import React from 'react';
import { hydrate } from 'react-dom';
import Test from './TestView';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__; // eslint-disable-line

// Create Redux store with initial state
const store = createStore(preloadedState, reducers);


hydrate(
  <Provider store={store}>
    <Test {...store} />
  </Provider>
  ,
  document.getElementById('root') // eslint-disable-line
);

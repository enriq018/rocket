'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _TestView = require('./TestView');

var _TestView2 = _interopRequireDefault(_TestView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import counterApp from './reducers';

// Grab the state from a global variable injected into the server-generated HTML
var preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
var store = (0, _redux.createStore)(preloadedState);

(0, _reactDom.hydrate)(_react2.default.createElement(_TestView2.default, store), document.getElementById('root'));

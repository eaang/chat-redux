// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  messages: [],
  channels: ['general', 'react', 'singapore'],
  currentUser: 'Jimmy',
  selectedChannel: 'general'
};

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  currentUser: identityReducer,
  messages: messagesReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

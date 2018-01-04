// @flow
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(appReducer, applyMiddleware(logger));
export default store;

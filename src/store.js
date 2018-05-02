import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import appReducer from './reducers';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const logger = createLogger();

const store = createStore(appReducer, applyMiddleware(middleware, logger));
export default store;

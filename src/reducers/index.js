import { combineReducers } from 'redux';
import navReducer from './navReducer';

const appReducer = combineReducers({
  navReducer,
});

export default appReducer;

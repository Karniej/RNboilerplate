import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer';

const appReducer = combineReducers({
  dummyState: dummyReducer,
});

export default appReducer;

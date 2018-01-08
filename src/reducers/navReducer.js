// @flow
import navigator from '../navigation/navigator';

// const initialState = navigator.router.getStateForAction(navigator.router.getActionForPathAndParams('loginStack'));
const navReducer = (state: any, action: any) => {
  const newState = navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;

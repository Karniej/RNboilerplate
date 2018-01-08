// @flow
import navigator from '../navigation/navigator';

const navReducer = (state: any, action: any) => {
  const newState = navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;

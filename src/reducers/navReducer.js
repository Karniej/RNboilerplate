// @flow
import navigator from '../navigation/navigator';

const initialState = navigator.router.getStateForAction(navigator.router.getActionForPathAndParams('Home'));
const navReducer = (state: any = initialState, action: any) => {
  const newState = navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;

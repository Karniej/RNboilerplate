import {
  HomeScreen, SecondScreen, ThirdScreen, FetchingTestScreen
} from '../screens'

// This is list of screens available in the Stack Navigator after logging in
// If you want to add any screen to the Drawer Stack , simply add a screen below:
const drawerScreens = {
  Home: {
    screen: HomeScreen
  },
  Second: {
    screen: SecondScreen
  },
  Third: {
    screen: ThirdScreen
  },
  FetchingTestScreen: {
    screen: FetchingTestScreen
  }
}

export default drawerScreens

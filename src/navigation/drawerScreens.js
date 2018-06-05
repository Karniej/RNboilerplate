import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SecondScreen from '../screens/SecondScreen/SecondScreen'
import ThirdScreen from '../screens/ThirdScreen/ThirdScreen'

// This is list of screens avaliable in the Stack Navigator after logging in
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
  }
}

export default drawerScreens

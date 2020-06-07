import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import contactStack from './contactStack';
import Stack from './mainStack';
import SignOutScreen from '../screens/SignOut';

const RootDrawer = createDrawerNavigator({
  Home: {
    screen: Stack
  },
  Contact: {
    screen: contactStack,
  },
  SignOut: SignOutScreen
});

export default createAppContainer(RootDrawer);
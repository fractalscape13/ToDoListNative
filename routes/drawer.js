import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import contactStack from './contactStack';
import Stack from './mainStack';

const RootDrawer = createDrawerNavigator({
  List: {
    screen: Stack
  },
  Contact: {
    screen: contactStack,
  }
});

export default createAppContainer(RootDrawer);
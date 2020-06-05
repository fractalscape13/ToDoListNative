import { createStackNavigator } from 'react-navigation-stack';
import Contact from '../screens/Contact';

const screens = {
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact Us',
    }
  }
}

const contactStack = createStackNavigator(screens, { defaultNavigationOptions: {
  headerStyle: { backgroundColor: 'rgb(180, 210, 210)', height: 90 }
  }
});

export default contactStack;
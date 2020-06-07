import { createStackNavigator } from 'react-navigation-stack';
import List from '../screens/List';
import Form from '../screens/Form';
import Splash from '../screens/Splash';

const screens = {
  List: {
    screen: List,
    navigationOptions: {
      title: 'TO DO LIST',
    }
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: 'Add an item',
    }
  }
}

const Stack = createStackNavigator(screens, { defaultNavigationOptions: {
  headerStyle: { backgroundColor: 'rgb(180, 210, 210)', height: 90 }
  }
});

export default Stack;
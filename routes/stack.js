import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import List from '../screens/List';
import Form from '../screens/Form';
import Contact from '../screens/Contact';

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
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact Us',
    }
  }
}

const Stack = createStackNavigator(screens, { defaultNavigationOptions: {
  headerStyle: { backgroundColor: 'rgb(180, 210, 210)' }
  }
});

export default createAppContainer(Stack);
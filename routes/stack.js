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
      headerStyle: { backgroundColor: 'rgb(180, 210, 210)' }
    }
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: 'Add an item',
      headerStyle: { backgroundColor: 'rgb(180, 210, 210)' }
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact Us',
      headerStyle: { backgroundColor: 'rgb(180, 210, 210)' }
    }
  }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
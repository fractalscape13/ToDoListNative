import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import List from '../screens/List';
import Form from '../screens/Form';
import Contact from '../screens/Contact';

const screens = {
  List: {
    screen: List
  },
  Form: {
    screen: Form
  },
  Contact: {
    screen: Contact
  }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
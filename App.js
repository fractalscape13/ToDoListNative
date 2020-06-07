import React, {useState} from 'react';
import Navigator from './src/routes/drawer';
import Splash from './src/screens/Splash';
import { auth } from './src/firebaseConfig';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function logInCapture(userObject){
    if(userObject.user.uid){
      setLoggedIn(true)
      //do something with the user object and user info to make it globally available
    }
  }

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  if (loggedIn) {
    return (
      <Navigator signOut={() => setLoggedIn(false)}/>
    );
  } else {
    return (
      <Splash logInCapture={logInCapture} />
    );
  }
}
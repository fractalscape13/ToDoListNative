import React, {useState} from 'react';
import Navigator from './src/routes/drawer';
import Splash from './src/screens/Splash';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function logInCapture(userObject){
    console.log('what user info did login pass us?', userObject)
    if(userObject.uid){
      setLoggedIn(true)
      //do something with the user object and user info to make it globally available
    }
  }

  if (loggedIn) {
    return (
      <Navigator />
    );
  } else {
    return (
      <Splash logInCapture={logInCapture} />
    );
  }
}
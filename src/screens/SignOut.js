import React from 'react';
import { auth } from '../firebaseConfig';
import { View } from 'react-native';

function SignOutScreen() {
  auth.signOut();
  return (
    <View></View>
  );
}

export default SignOutScreen;
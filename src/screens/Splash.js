import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import {auth} from '../firebase';

export default function Splash({ navigation, logInCapture }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] =  useState(false);

  const signIn = () => {
      auth.signInWithEmailAndPassword(user, password)
      .then(res => {
        console.log('res.user', res.user, 'res.user.uid', res.user.uid)
        logInCapture(res)
      })
      .catch(e => console.log('yall had an error- signIn function', e));

  }

  const signUp = () => {
    auth.createUserWithEmailAndPassword(user, password)
    .then(res => {
      console.log('res.user', res.user)
      logInCapture(res)
    })
    .catch(e => console.log('yall had an error- signUp function', e));
  }


  if (register) {
    return (
      <View style={styles.form}>
        <Text style={styles.header}>Sign Up</Text>
        <TextInput onChangeText={(text) => setUser(text)}style={styles.text} autoCapitalize='none' placeholder="Email"/>
        <TextInput onChangeText={(text) => setPassword(text)}style={styles.text} autoCapitalize='none'placeholder="Password"/>
        <TextInput onChangeText={(text) => setPassword(text)}style={styles.text} autoCapitalize='none'placeholder="Confirm password"/>
        <TouchableOpacity onPress={signUp}><Text style={styles.button}>Sign Up</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setRegister(false)}><Text style={styles.button}>Already registered? Click to sign in</Text></TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.form}>
        <Text style={styles.header}>Sign In</Text>
        <TextInput onChangeText={(text) => setUser(text)}style={styles.text} autoCapitalize='none' placeholder="Email"/>
        <TextInput onChangeText={(text) => setPassword(text)}style={styles.text} autoCapitalize='none' placeholder="Password"/>
        <TouchableOpacity onPress={signIn}><Text style={styles.button}>Sign In</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setRegister(true)}><Text style={styles.button}>New? Click to register</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: 'rgb(150, 180, 180)',
    alignItems: 'center',
    paddingTop: '35%',
    fontSize: 20,
    color: 'white',
    borderTopColor: 'ivory',
    borderStyle: 'solid',
    borderTopWidth: 5,
  },
  text: {
    fontSize: 22,
    color: 'ivory',
    borderWidth: 2,
    borderColor: 'ivory',
    padding: 5,
    paddingLeft: 35,
    paddingRight: 35,
    maxWidth: '80%',
    margin: 5,
  },
  header: {
    fontSize: 30,
    margin: 20,
  },
  button: {
    fontSize: 18,
    color: 'ivory',
    borderWidth: 5,
    borderColor: 'ivory',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 20,
    borderRadius: 8,
  },
});
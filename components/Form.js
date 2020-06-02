import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

export default function Form() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.text} placeholder="Click to add item"/>
      <TouchableOpacity><Text style={styles.button}>Submit</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: 'rgb(140, 170, 170)',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white',
    width: '80%',
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
  },
  button: {
    fontSize: 18,
    color: 'ivory',
    borderWidth: 5,
    borderColor: 'ivory',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    maxWidth: '80%',
    margin: 20,
    borderRadius: 8,
  },
});
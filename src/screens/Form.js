import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { db } from '../firebaseConfig';

export default function Form({ navigation }) {
  const [item, setItem] = useState('');

  const addItem = () => {
    db.ref('/list').push({
      name: item
    });
    navigation.navigate('List')
  }

  const backToList = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.form}>
      <TextInput onChangeText={(text) => setItem(text)}style={styles.text} placeholder="Enter new item"/>
      <TouchableOpacity onPress={addItem}><Text style={styles.button}>Submit</Text></TouchableOpacity>
      <TouchableOpacity onPress={backToList}><Text style={styles.button}>Return to list</Text></TouchableOpacity>
    </View>
  );
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
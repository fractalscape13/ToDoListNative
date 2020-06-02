import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.splash}>
      <Text style={styles.title}>TO-DO LIST</Text>
      <List />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: 'rgb(40, 40, 40)',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: 'ivory',
    marginTop: 50,
    justifyContent: 'center',
    marginBottom: 30,
  }
});

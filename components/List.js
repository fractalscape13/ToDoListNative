import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function List() {
  return (
    <View style={styles.list}>
      <Text style={styles.title}> YOUR LIST HERE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'rgb(90, 120, 120)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderTopColor: 'ivory',
    borderStyle: 'solid',
    borderTopWidth: 5,
  },
  title: {
    fontSize: 40,
    color: 'ivory',
  }
});
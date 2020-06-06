import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contact() {

  return (
    <View style={styles.contact}>
      <Text style={styles.text}> Email us with any questions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    backgroundColor: 'rgb(120, 150, 140)',
    borderTopColor: 'ivory',
    borderStyle: 'solid',
    borderTopWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'ivory',
    margin: 8,
  }
});
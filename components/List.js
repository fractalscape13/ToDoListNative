import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function List() {
  //add logic to pull all items from firebase and set as state
  // const [list, setList] = useState([]);
  const list = ['things', 'stuff', 'more things'];

  let mappedList = list.map((item, i) => {
    return <Text key={i} style={styles.item}>~ {item}</Text>
  })

  return (
    <View style={styles.list}>
      {mappedList}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'rgb(90, 120, 120)',
    width: '80%',
    borderTopColor: 'ivory',
    borderStyle: 'solid',
    borderTopWidth: 5,
  },
  item: {
    fontSize: 20,
    color: 'ivory',
    margin: 8,
  }
});
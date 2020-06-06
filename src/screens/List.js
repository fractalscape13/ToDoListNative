import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { db } from '../firebase';

export default function List({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    db.ref('/list').on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      console.log("items::::", items)
      setList(items)
    })
  }, [])

  let mappedList = list.map((item, i) => {
    return <Text key={i} style={styles.item}> {item.name}</Text>
  })

  const pressHandler = () => {
    navigation.navigate('Form');
    // navigation.push('Form');
  }

  return (
    <View style={styles.list}>
      {mappedList}
      <View style={styles.center}>
        <TouchableOpacity onPress={pressHandler}><Text style={styles.button}>Add to list</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'rgb(130, 160, 160)',
    paddingTop: 15,
    borderTopColor: 'ivory',
    borderStyle: 'solid',
    borderTopWidth: 5,
  },
  item: {
    fontSize: 20,
    color: 'ivory',
    margin: 8,
  },  
  center: {
    alignItems: 'center',
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
    width: '30%'
  },
});
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { db } from '../firebaseConfig';
import { set } from 'react-native-reanimated';
import {auth} from '../firebaseConfig';

export default function List({ navigation, signOut }) {
  const [list, setList] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    db.ref('/list').on('value', snapshot => {
      let data = snapshot.val();
      try {
        let obj = Object.keys(data);
        let items = Object.values(data);
        for (let i=0; i<obj.length; i++) {
          items[i].id = obj[i];
        }
        setList(items)
      } catch(error) {
        setList([]);
      }
    })
  }, [])

  const handlePress = (itemId) => {
    if (id.includes(itemId)) {
      let newArr = id.filter(element => element != itemId);
      setId(newArr);
    } else {
      setId([...id, itemId]);
    }
  }
  
  const handleDelete = () => {
    id.forEach(element => {
      let itemRef = db.ref(`/list/${element}`);
      itemRef.remove();
    })
    setId([]);
  }

  let mappedList = list.map((item, i) => {
    return <CheckBox onPress={() => handlePress(item.id)}key={i} containerStyle={styles.checkbox} checked={id.indexOf(item.id) != -1 ? true : false}style={styles.item} title={item.name}/>
  })

  const pressHandler = () => {
    navigation.navigate('Form');
  }

  return (
    <View style={styles.list}>
      {mappedList}
      <View style={styles.center}>
        {id.length > 0 ? <TouchableOpacity onPress={handleDelete}><Text style={styles.button}>Remove Selected Items</Text></TouchableOpacity> : null}
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
  },
  checkbox: {
    backgroundColor: 'rgb(130, 160, 160)'
  }
});
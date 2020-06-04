import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from '../styles/ListItem';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const listItem = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default listItem;

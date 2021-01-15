import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../res/styles';
import SingleResturant from './SingleResturant';
const RestaurantList = ({title, result}) => {
  console.log(result, 'result >>');
  return (
    <View>
      <Text style={styles.headerTitleRestaurantList}>{title}</Text>
      <FlatList
        horizontal
        data={result}
        keyExtractor={(resultt) => resultt.id}
        renderItem={({item}) => {
          return <SingleResturant item={item} />;
        }}
        // {({item}) => (
        //   <View>
        //     <Text>{item.name}</Text>
        //   </View>
        // )}
      />
    </View>
  );
};

export default RestaurantList;

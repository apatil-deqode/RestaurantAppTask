import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../res/styles';
import SingleResturant from './SingleResturant';
// import {withNavigation} from 'recat-navigation';

const RestaurantList = ({title, result, navigation}) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={styles.headerTitleRestaurantList}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(resultt) => resultt.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResturantDetail', {id: item.id})
              }>
              <SingleResturant item={item} />
            </TouchableOpacity>
          );
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

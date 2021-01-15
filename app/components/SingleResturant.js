/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

const SingleResturant = ({item}) => {
  return (
    <View style={{marginLeft: 15}}>
      <Image
        style={{height: 120, width: 250, borderRadius: 4, marginBottom: 5}}
        source={{uri: item.image_url}}
      />
      <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
      <Text>
        {item.rating} Starts, {item.review_count} Reviews
      </Text>
    </View>
  );
};

export default SingleResturant;

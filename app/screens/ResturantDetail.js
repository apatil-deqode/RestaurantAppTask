import React from 'react';
import {View, Text} from 'react-native';
const ResturantDetail = ({route}) => {
  const id = route.params.id;
  return (
    <View>
      <Text>Anil {id}</Text>
    </View>
  );
};

export default ResturantDetail;

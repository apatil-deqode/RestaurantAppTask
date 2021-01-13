import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchScreen from "../hooks/useSearchScreen";
import RestaurantList from "../components/RestaurantList"
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [callApiSearch,errorMessage,result] = useSearchScreen()

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmitted={() => callApiSearch(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <RestaurantList title = 'Cost Effective'/>
      <RestaurantList title = 'Bit Pricier'/>
      <RestaurantList title = 'Gig Spender'/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

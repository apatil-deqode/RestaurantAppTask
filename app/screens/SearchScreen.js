import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchScreen from '../hooks/useSearchScreen';
import RestaurantList from '../components/RestaurantList';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [callApiSearch, errorMessage, result] = useSearchScreen();

  const filterResultByPrice = (price) => {
    return result.filter((resultR) => {
      console.log(resultR, '>>>> resultR');
      return resultR.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmitted={() => callApiSearch(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <RestaurantList
        result={filterResultByPrice('$')}
        title="Cost Effective"
      />
      <RestaurantList result={filterResultByPrice('$$')} title="Bit Pricier" />
      <RestaurantList result={filterResultByPrice('$$$')} title="Gig Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

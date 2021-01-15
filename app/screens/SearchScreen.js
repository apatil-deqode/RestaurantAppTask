import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchScreen from '../hooks/useSearchScreen';
import RestaurantList from '../components/RestaurantList';
const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [callApiSearch, errorMessage, result] = useSearchScreen();

  const filterResultByPrice = (price) => {
    return result.filter((resultR) => {
      return resultR.price === price;
    });
  };

  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmitted={() => callApiSearch(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        {result.length > 0 ? (
          <>
            <RestaurantList
              result={filterResultByPrice('$')}
              title="Cost Effective"
              navigation={navigation}
            />
            <RestaurantList
              result={filterResultByPrice('$$')}
              title="Bit Pricier"
              navigation={navigation}
            />
            <RestaurantList
              result={filterResultByPrice('$$$')}
              title="Gig Spender"
              navigation={navigation}
            />
          </>
        ) : (
          <Text> No Data </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

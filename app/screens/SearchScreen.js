import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const callApiSearch = (strSearch) => {
    console.log('>>>> 1', strSearch);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onTermSubmitted={(strSearch) => callApiSearch(strSearch)}
      />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

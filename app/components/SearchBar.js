import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../res/styles';
const SearchBar = ({term, onChangeTerm, onTermSubmitted}) => {
  return (
    <View style={styles.searchBackground}>
      <Icon name="search" style={styles.searchIconStyle} />
      <TextInput
        style={styles.searchInputStyle}
        placeholder={'Search'}
        value={term}
        onChangeText={onChangeTerm}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};

export default SearchBar;

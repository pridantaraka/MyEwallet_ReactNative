import {View, Text} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-screens';

const Search = ({placeholder, input}) => {
  return (
    <View>
      <SearchBar placeholder={placeholder} inputType={input} />
    </View>
  );
};

export default Search;

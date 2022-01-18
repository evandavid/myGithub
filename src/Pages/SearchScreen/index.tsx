import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SearchScreenWrapper} from './styled';

const SearchScreen = () => {
  return (
    <SearchScreenWrapper>
      <ActivityIndicator />
    </SearchScreenWrapper>
  );
};

export default SearchScreen;

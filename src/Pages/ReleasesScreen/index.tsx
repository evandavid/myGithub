import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ReleasesScreenWrapper} from './styled';

const ReleasesScreen = () => {
  return (
    <ReleasesScreenWrapper>
      <ActivityIndicator />
    </ReleasesScreenWrapper>
  );
};

export default ReleasesScreen;

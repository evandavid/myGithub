import React from 'react';
import {ActivityIndicator} from 'react-native';
import {FollowingScreenWrapper} from './styled';

const FollowingScreen = () => {
  return (
    <FollowingScreenWrapper>
      <ActivityIndicator />
    </FollowingScreenWrapper>
  );
};

export default FollowingScreen;

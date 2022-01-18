import React from 'react';
import {ActivityIndicator} from 'react-native';
import SplashScreenWrapper from './styled';

const SplashScreen = () => {
  return (
    <SplashScreenWrapper>
      <ActivityIndicator />
    </SplashScreenWrapper>
  );
};

export default SplashScreen;

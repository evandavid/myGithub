/* eslint-disable react-native/no-inline-styles */
import './Localize';

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Routes from './Routes';
import Icon from 'react-native-vector-icons/Feather';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

Icon.loadFont();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider style={backgroundStyle}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <Routes />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

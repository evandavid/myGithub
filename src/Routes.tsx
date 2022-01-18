import React, {createContext} from 'react';
import {Platform, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import BackIcon from './Components/BackIcon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const BottomNavigationContext = createContext<{
  status: 'initial' | 'loaded' | 'ditry';
  updateStatus?: any;
}>({
  status: 'initial',
});

const withHeaderOptions: any = {
  headerStyle: {shadowColor: 'transparent'},
  headerTintColor: '#fff',
  headerShown: true,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerBackImage: () => <BackIcon />,
};

const withAnimation: any = {
  cardStyleInterpolator:
    Platform.OS === 'ios'
      ? CardStyleInterpolators.forHorizontalIOS
      : CardStyleInterpolators.forFadeFromBottomAndroid,
};

const withTabBarOptions = {
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#909090',
};

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
      }}>
      <Tab.Screen
        name="Search"
        component={() => <View />}
        options={{
          ...withTabBarOptions,
        }}
      />
      <Tab.Screen
        name="Following"
        component={() => <View />}
        options={{
          ...withTabBarOptions,
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const SabotenTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <NavigationContainer theme={SabotenTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...withAnimation,
        }}>
        <Stack.Screen name="SplashScreen" component={() => <View />} />
        <Stack.Screen name="DashboardScreen" component={TabScreens} />
        <Stack.Screen
          name="Releases"
          component={() => <View />}
          options={{
            ...withHeaderOptions,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

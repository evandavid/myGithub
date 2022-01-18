import React, {createContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import BackIcon from '@Components/BackIcon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import SplashScreen from '@Pages/SplashScreen';
import SearchScreen from '@Pages/SearchScreen';
import FollowingScreen from '@Pages/FollowingScreen';
import ReleasesScreen from '@Pages/ReleasesScreen';

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

const withTabBarOptions = {
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#909090',
};

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#333',
          borderBottomWidth: 0,
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
        headerTitleStyle: {
          color: '#fff',
        },
        tabBarStyle: {
          backgroundColor: '#333',
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
        component={SearchScreen}
        options={{
          ...withTabBarOptions,
          tabBarIcon: ({color, size}: any) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={FollowingScreen}
        options={{
          ...withTabBarOptions,
          tabBarIcon: ({color, size}: any) => (
            <Icon name="user-check" color={color} size={size} />
          ),
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
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="DashboardScreen" component={TabScreens} />
        <Stack.Screen
          name="Releases"
          component={ReleasesScreen}
          options={{
            ...withHeaderOptions,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

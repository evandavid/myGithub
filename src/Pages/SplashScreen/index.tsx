import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useMyGithub} from '@Context/index';
import {ACTION_TYPES} from '@Context/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  getStringData,
  SEARCH_QUERY_KEY,
  getObjectData,
  LIST_KEY,
} from '@Config/Db';
import SplashScreenWrapper from './styled';

const SplashScreen = ({
  navigation,
}: NativeStackScreenProps<{DashboardScreen: undefined}, never>) => {
  const {dispatch} = useMyGithub();

  const getInitialDataFromDevice = async () => {
    const searchQuery = await getStringData(SEARCH_QUERY_KEY);
    const followingList = await getObjectData(LIST_KEY);

    dispatch({
      type: ACTION_TYPES.INITIAL_DATA,
      payload: {
        searchQuery,
        followingList,
      },
    });

    navigation.replace('DashboardScreen');
  };

  useEffect(() => {
    getInitialDataFromDevice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SplashScreenWrapper>
      <ActivityIndicator color="#ebebeb" />
    </SplashScreenWrapper>
  );
};

export default SplashScreen;

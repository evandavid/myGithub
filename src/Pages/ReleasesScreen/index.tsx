/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {ACTION_TYPES, GithubData, GithubReleaseData} from '@Context/types';
import {useMyGithub} from '@Context/index';
import RepositoryReleaseCard from '@Components/RepositoryReleaseCard';

import {ReleasesScreenWrapper, ItemSeparator} from './styled';

const ReleasesScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<{ReleasesScreen: GithubData}, never>) => {
  const {full_name, releases} = route.params;

  const {dispatch} = useMyGithub();

  const renderItem = ({item}: {item: GithubReleaseData}) => {
    return <RepositoryReleaseCard {...item} />;
  };

  useEffect(() => {
    navigation.setOptions({
      title: full_name,
    });
  }, [full_name]);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.UPDATE_SEEN,
      payload: {
        repository: route.params,
        seen: true,
      },
    });
  }, []);

  return (
    <ReleasesScreenWrapper>
      <FlatList
        style={{flex: 1, width: '100%'}}
        data={releases}
        ListFooterComponent={<ItemSeparator />}
        ListHeaderComponent={<ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={renderItem}
        keyExtractor={item => item.tag_name + 'releases'}
      />
    </ReleasesScreenWrapper>
  );
};

export default ReleasesScreen;

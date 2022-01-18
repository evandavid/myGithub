/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {useMyGithub} from '@Context/index';
import BlankPlaceholder from '@Components/BlankPlaceholder';
import {GithubData} from '@Context/types';
import RepositoryCard from '@Components/RepositoryCard';

import {FollowingScreenWrapper, ItemSeparator} from './styled';

const FollowingScreen = () => {
  const {followingList} = useMyGithub();

  const renderItem = ({item}: {item: GithubData}) => {
    return <RepositoryCard followingScreen {...item} />;
  };

  return (
    <FollowingScreenWrapper>
      {followingList && followingList.length ? (
        <FlatList
          style={{flex: 1, width: '100%'}}
          data={followingList}
          ListFooterComponent={<ItemSeparator />}
          ListHeaderComponent={<ItemSeparator />}
          ItemSeparatorComponent={() => <ItemSeparator />}
          renderItem={renderItem}
          keyExtractor={item => item.id + 'following'}
        />
      ) : (
        <BlankPlaceholder
          text={'No data to display\nStart search to add following list'}
        />
      )}
    </FollowingScreenWrapper>
  );
};

export default FollowingScreen;

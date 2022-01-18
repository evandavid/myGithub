import React from 'react';
import {View} from 'react-native';
import {useMyGithub} from '@Context/index';
import BlankPlaceholder from '@Components/BlankPlaceholder';
import {FollowingScreenWrapper} from './styled';

const FollowingScreen = () => {
  const {followingList} = useMyGithub();
  return (
    <FollowingScreenWrapper>
      {followingList && followingList.length ? (
        <View />
      ) : (
        <BlankPlaceholder
          text={'No data to display\nStart search to add following list'}
        />
      )}
    </FollowingScreenWrapper>
  );
};

export default FollowingScreen;

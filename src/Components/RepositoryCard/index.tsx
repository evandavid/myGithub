import React, {useEffect} from 'react';
import {Alert, TouchableWithoutFeedback} from 'react-native';
import {ACTION_TYPES, GithubData} from '@Context/types';
import {useMyGithub} from '@Context/index';
import formatDistance from 'date-fns/formatDistance';
import Icon from 'react-native-vector-icons/Feather';
import {abbreviateNumber} from '@Config/Util';

import {
  CardWrapper,
  InnerWrapper,
  Header,
  Avatar,
  RepoNameText,
  TextWrapper,
  LastUpdatedText,
  DescriptionText,
  Footer,
  FooterText,
  FooterItem,
  ButtonWrapper,
  FollowText,
} from './styled';

interface RepositoryCardProps extends GithubData {
  followingScreen?: boolean;
}

const RepositoryCard = ({
  followingScreen,
  ...repository
}: RepositoryCardProps) => {
  const {
    owner,
    full_name,
    description,
    updated_at,
    stargazers_count,
    language,
  } = repository;

  const {followingList, dispatch} = useMyGithub();

  const isFollowing =
    followingList && followingList.length
      ? followingList
          .map(({full_name: fName}: {full_name: string}) => fName)
          .includes(full_name)
      : false;

  const onFollow = () => {
    dispatch({
      type: ACTION_TYPES.ADD_TO_LIST,
      payload: {
        repository,
      },
    });
    Alert.alert('Following', 'Added to following list');
  };

  const onUnfollow = () => {
    dispatch({
      type: ACTION_TYPES.REMOVE_FROM_LIST,
      payload: {
        repository,
      },
    });
    Alert.alert('Unfollow', 'Removed from following list');
  };

  const getReleases = () => {};

  useEffect(() => {
    if (followingScreen) {
      getReleases();
    }
  }, [followingScreen]);

  return (
    <CardWrapper>
      <InnerWrapper>
        <Header>
          <Avatar source={{uri: owner.avatar_url}} />
          <TextWrapper>
            <RepoNameText>{full_name}</RepoNameText>
            <LastUpdatedText>
              Last update: {formatDistance(new Date(updated_at), new Date())}
            </LastUpdatedText>
          </TextWrapper>
          {followingScreen && (
            <>
              <TouchableWithoutFeedback>
                <Icon name="chevron-right" color="#39649D" size={24} />
              </TouchableWithoutFeedback>
            </>
          )}
        </Header>
        <DescriptionText>{description}</DescriptionText>
        <Footer>
          <FooterItem>
            <Icon name="code" color="#C9510B" size={14} />
            <FooterText>{language || 'Unknown'}</FooterText>
          </FooterItem>
          <FooterItem>
            <Icon name="star" color="#FBCB3F" size={14} />
            <FooterText>{abbreviateNumber(stargazers_count)}</FooterText>
          </FooterItem>
          {isFollowing ? (
            <TouchableWithoutFeedback onPress={onUnfollow}>
              <ButtonWrapper>
                <Icon name="user-x" color="#39649D" size={18} />
                <FollowText>Unfollow</FollowText>
              </ButtonWrapper>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={onFollow}>
              <ButtonWrapper>
                <Icon name="user-plus" color="#39649D" size={18} />
                <FollowText>Follow</FollowText>
              </ButtonWrapper>
            </TouchableWithoutFeedback>
          )}
        </Footer>
      </InnerWrapper>
    </CardWrapper>
  );
};

export default RepositoryCard;

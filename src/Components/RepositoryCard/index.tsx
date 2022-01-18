import React, {useEffect} from 'react';
import {Alert, TouchableWithoutFeedback} from 'react-native';
import formatDistance from 'date-fns/formatDistance';
import Icon from 'react-native-vector-icons/Feather';
import {ACTION_TYPES, GithubData} from '@Context/types';
import {useMyGithub} from '@Context/index';
import {abbreviateNumber} from '@Config/Util';
import useGithubSearch from '@Hooks/useGithubSearch';

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
  VersionOuter,
  VersionInner,
  VersionText,
} from './styled';

interface RepositoryCardProps extends GithubData {
  followingScreen?: boolean;
  onNavigate?: (n: GithubData) => void;
}

const RepositoryCard = ({
  followingScreen,
  onNavigate,
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
  const {getReleases} = useGithubSearch();

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

  const getRepoReleases = async () => {
    try {
      const {data: result} = await getReleases(full_name);

      if (
        !repository.releases ||
        (repository?.releases?.length &&
          repository.releases[0].tag_name !== result[0].tag_name)
      ) {
        /** new release found */

        dispatch({
          type: ACTION_TYPES.UPDATE_RELEASE,
          payload: {
            repository,
            releases: result,
          },
        });
      }
    } catch (e) {
      console.log('eee', e);
      Alert.alert('Ops', 'Something went wrong');
    }
  };

  useEffect(() => {
    if (followingScreen) {
      getRepoReleases();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingScreen]);

  return (
    <CardWrapper>
      <InnerWrapper>
        <Header>
          <Avatar source={{uri: owner.avatar_url}} />
          <TextWrapper>
            <RepoNameText>{full_name}</RepoNameText>
            <LastUpdatedText>
              {followingScreen ? '' : 'Last update: '}
              {formatDistance(new Date(updated_at), new Date())}
            </LastUpdatedText>
          </TextWrapper>
          {followingScreen && repository?.releases?.length && (
            <>
              <TouchableWithoutFeedback
                onPress={() => {
                  onNavigate && onNavigate(repository);
                }}>
                <VersionOuter>
                  <VersionInner seen={true}>
                    <VersionText seen={true}>
                      {repository.releases[0].tag_name}
                    </VersionText>
                  </VersionInner>
                  {!repository.seen && (
                    <VersionInner>
                      <VersionText>NEW</VersionText>
                    </VersionInner>
                  )}
                  <Icon name="chevron-right" color="#39649D" size={24} />
                </VersionOuter>
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

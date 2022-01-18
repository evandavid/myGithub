import React from 'react';
import {GithubData} from '@Context/types';
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
import {TouchableWithoutFeedback} from 'react-native';

const RepositoryCard = ({
  owner,
  full_name,
  description,
  updated_at,
  stargazers_count,
  language,
}: GithubData) => {
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
          <TouchableWithoutFeedback>
            <ButtonWrapper>
              <Icon name="user-plus" color="#39649D" size={18} />
              <FollowText>Follow</FollowText>
            </ButtonWrapper>
          </TouchableWithoutFeedback>
        </Footer>
      </InnerWrapper>
    </CardWrapper>
  );
};

export default RepositoryCard;

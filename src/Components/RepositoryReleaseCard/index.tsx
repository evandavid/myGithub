import React from 'react';
import formatDistance from 'date-fns/formatDistance';
import {GithubReleaseData} from '@Context/types';

import {
  CardWrapper,
  InnerWrapper,
  Header,
  RepoNameText,
  TextWrapper,
  LastUpdatedText,
  DescriptionText,
} from './styled';

const RepositoryReleaseCard = ({
  tag_name,
  published_at,
  body,
}: GithubReleaseData) => {
  return (
    <CardWrapper>
      <InnerWrapper>
        <Header>
          <TextWrapper>
            <RepoNameText>{tag_name}</RepoNameText>
            <LastUpdatedText>
              {formatDistance(new Date(published_at), new Date())}
            </LastUpdatedText>
          </TextWrapper>
        </Header>
        <DescriptionText>{body}</DescriptionText>
      </InnerWrapper>
    </CardWrapper>
  );
};

export default RepositoryReleaseCard;

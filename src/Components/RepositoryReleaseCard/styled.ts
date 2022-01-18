import styled from 'styled-components';
import {Text, View} from 'react-native';

const CardWrapper = styled(View)`
  padding-left: 12px;
  padding-right: 12px;
`;

const InnerWrapper = styled(View)`
  background: #212121;
  padding: 24px;
  border-radius: 10px;
`;

const Header = styled(View)`
  flex-direction: row;
  align-items: center;

  border-bottom-width: 2px;
  border-color: #111;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const TextWrapper = styled(View)`
  flex: 1;
`;

const RepoNameText = styled(Text)`
  color: #e8e8e8;
  font-size: 16px;
  font-weight: 500;
`;

const LastUpdatedText = styled(Text)`
  color: #888;
  margin-right: 6px;
  font-size: 12px;
`;

const DescriptionText = styled(Text)`
  color: #e8e8e8;
`;

export {
  CardWrapper,
  InnerWrapper,
  Header,
  RepoNameText,
  TextWrapper,
  LastUpdatedText,
  DescriptionText,
};

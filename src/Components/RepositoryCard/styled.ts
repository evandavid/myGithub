import styled, {css} from 'styled-components';
import {Image, Text, View} from 'react-native';

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

const Avatar = styled(Image)`
  width: 36px;
  height: 36px;
  border-radius: 18px;

  margin-right: 12px;
  border-width: 2px;
  border-color: #e8e8e8;
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
  color: #a8a8a8;
`;

const Footer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: 12px;
`;

const FooterItem = styled(View)`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const FooterText = styled(Text)`
  color: #e8e8e8;
  font-weight: 500;
  margin-left: 3px;
  font-size: 13px;
`;

const ButtonWrapper = styled(View)`
  background: #242a33;
  border-radius: 6px;
  height: 42px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FollowText = styled(Text)`
  color: #39649d;
  margin-left: 3px;
  font-weight: 500;
`;

const VersionOuter = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const VersionInner = styled(View)<{seen?: boolean}>`
  padding: 3px 6px;
  border-radius: 3px;
  ${props =>
    !props.seen &&
    css`
      background: #383325;
    `}
`;

const VersionText = styled(Text)<{seen?: boolean}>`
  color: ${props => (!props.seen ? '#FBCB3F' : '#39649d')};
  margin-left: 3px;
  font-weight: 500;
`;

export {
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
};

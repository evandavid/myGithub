import {View, Text} from 'react-native';
import styled from 'styled-components';

const BlankPlaceholderWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const BlankPlaceholderInnerWrapper = styled(View)`
  background: transparent;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BlankPlaceholderText = styled(Text)`
  font-size: 16px;
  color: #aaa;
  text-align: center;
`;

export {
  BlankPlaceholderWrapper,
  BlankPlaceholderInnerWrapper,
  BlankPlaceholderText,
};

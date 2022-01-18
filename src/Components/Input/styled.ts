import styled from 'styled-components';
import {TextInput, View} from 'react-native';

const InputWrapper = styled(View)`
  height: 48px;
  background: #ebebeb;
  width: 100%;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const StyledTextInput = styled(TextInput)`
  padding: 0;
  padding-left: 12px;
  padding-right: 12px;
  background: transparent;
  color: #212121;
  flex: 1;
`;

const IconWrapper = styled(View)`
  padding-left: 12px;
  padding-right: 12px;
`;

export {InputWrapper, StyledTextInput, IconWrapper};

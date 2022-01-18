import React, {ReactNode} from 'react';
import {TextInputProps} from 'react-native';

import {InputWrapper, StyledTextInput, IconWrapper} from './styled';

interface InputProps extends TextInputProps {
  trailingIcon?: ReactNode;
}

const Input = (props: InputProps) => {
  const {trailingIcon, ...textInputProps} = props;

  return (
    <InputWrapper>
      <StyledTextInput {...textInputProps} />
      {trailingIcon && <IconWrapper>{trailingIcon}</IconWrapper>}
    </InputWrapper>
  );
};

export default Input;

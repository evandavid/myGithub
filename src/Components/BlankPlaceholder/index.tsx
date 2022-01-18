import React from 'react';
import {
  BlankPlaceholderWrapper,
  BlankPlaceholderInnerWrapper,
  BlankPlaceholderText,
} from './styled';

const BlankPlaceholder = ({text = 'No data to display'}: {text?: string}) => {
  return (
    <BlankPlaceholderWrapper>
      <BlankPlaceholderInnerWrapper>
        <BlankPlaceholderText>{text}</BlankPlaceholderText>
      </BlankPlaceholderInnerWrapper>
    </BlankPlaceholderWrapper>
  );
};

export default BlankPlaceholder;

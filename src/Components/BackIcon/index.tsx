import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import BackIconWrapper from './styled';

const BackIcon = () => {
  return (
    <BackIconWrapper>
      <Icon name={'chevron-left'} size={24} color="#EBEBEB" />
    </BackIconWrapper>
  );
};

export default BackIcon;

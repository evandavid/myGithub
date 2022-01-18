import {View} from 'react-native';
import styled from 'styled-components';

const SearchScreenWrapper = styled(View)`
  flex: 1;
  align-items: center;
  padding-top: 12px;
  background: #333;
`;

const PaddingHorizontal = styled(View)`
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
`;

const ItemSeparator = styled(View)`
  height: 12px;
`;

export {SearchScreenWrapper, PaddingHorizontal, ItemSeparator};

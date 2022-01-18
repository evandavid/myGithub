/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useMyGithub} from '@Context/index';
import {ACTION_TYPES, GithubData} from '@Context/types';
import useDebounce from '@Hooks/useDebounce';
import useGithubSearch from '@Hooks/useGithubSearch';
import Input from '@Components/Input';
import RepositoryCard from '@Components/RepositoryCard';

import {SearchScreenWrapper, PaddingHorizontal, ItemSeparator} from './styled';

const SearchScreen = () => {
  const {searchQuery, dispatch} = useMyGithub();
  const {searchRepository} = useGithubSearch();
  const [query, setSearchQuery] = useState(searchQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState([]);

  const debouncedSearchQuery = useDebounce(query, 500);

  const doSearchFromGithubAPI: any = async (q: string) => {
    setIsSearching(true);
    try {
      const {data: result} = await searchRepository(q || (query as string));
      if (result?.items?.length) {
        setData(result.items);
      }
      setIsSearching(false);
    } catch (e) {
      console.log('eee');
      Alert.alert('Ops', 'Something went wrong');
      setIsSearching(false);
    }
  };

  const debounceCalled = async () => {
    if (debouncedSearchQuery) {
      /** update data on device */
      dispatch({
        type: ACTION_TYPES.UPDATE_SEARCH_QUERY,
        payload: {
          searchQuery: debouncedSearchQuery,
        },
      });
      doSearchFromGithubAPI(debouncedSearchQuery);
    } else {
      setIsSearching(false);
      setData([]);
    }
  };

  const renderItem = ({item}: {item: GithubData}) => {
    return <RepositoryCard {...item} />;
  };

  useEffect(() => {
    debounceCalled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (searchQuery) {
      /** first call, searchquery Exists, call github API*/
      doSearchFromGithubAPI(searchQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchScreenWrapper>
      <PaddingHorizontal>
        <Input
          onChangeText={setSearchQuery}
          value={query}
          trailingIcon={<Icon name="search" size={24} />}
        />
      </PaddingHorizontal>
      <FlatList
        style={{flex: 1, width: '100%'}}
        data={data}
        ListFooterComponent={<ItemSeparator />}
        ListHeaderComponent={<ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={renderItem}
        refreshing={isSearching}
        onRefresh={doSearchFromGithubAPI}
        keyExtractor={item => item.id}
      />
    </SearchScreenWrapper>
  );
};

export default SearchScreen;

import AsyncStorage from '@react-native-async-storage/async-storage';

const SEARCH_QUERY_KEY = '@search_query';
const LIST_KEY = '@list_key';

const storeStringData = async (value: string, key: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getStringData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // error reading value
  }
};

const storeObjectData = async (value: object, key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getObjectData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export {storeStringData, getStringData, storeObjectData, getObjectData};
export {SEARCH_QUERY_KEY, LIST_KEY};

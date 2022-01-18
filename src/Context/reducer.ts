import {
  LIST_KEY,
  SEARCH_QUERY_KEY,
  storeObjectData,
  storeStringData,
} from '@Config/Db';
import {ACTION_TYPES, IMyGithubContextState, MyGithubActions} from './types';

const MyGithubReducer = (
  state: IMyGithubContextState,
  action: MyGithubActions,
): IMyGithubContextState => {
  switch (action.type) {
    case ACTION_TYPES.INITIAL_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPES.UPDATE_SEARCH_QUERY:
      storeStringData(action.payload.searchQuery || '', SEARCH_QUERY_KEY);
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPES.ADD_TO_LIST:
      const followingList = [...(state.followingList || [])];
      followingList.push(action.payload.repository);

      storeObjectData(followingList, LIST_KEY);

      return {
        ...state,
        followingList,
      };

    case ACTION_TYPES.REMOVE_FROM_LIST:
      const clonedList = [...(state.followingList || [])];
      const index = clonedList.findIndex(
        ({id}) => id === action.payload.repository.id,
      );
      clonedList.splice(index, 1);
      storeObjectData(clonedList, LIST_KEY);

      return {
        ...state,
        followingList: clonedList,
      };

    case ACTION_TYPES.UPDATE_RELEASE:
      const clonedListForRelease = [...(state.followingList || [])];
      const indexForRelease = clonedListForRelease.findIndex(
        ({id}) => id === action.payload.repository.id,
      );
      clonedListForRelease[indexForRelease].seen = false;
      clonedListForRelease[indexForRelease].releases = action.payload.releases;
      storeObjectData(clonedListForRelease, LIST_KEY);

      return {
        ...state,
        followingList: clonedListForRelease,
      };

    case ACTION_TYPES.UPDATE_SEEN:
      const clonedListForSeen = [...(state.followingList || [])];
      const indexForSeen = clonedListForSeen.findIndex(
        ({id}) => id === action.payload.repository.id,
      );
      clonedListForSeen[indexForSeen].seen = true;
      storeObjectData(clonedListForSeen, LIST_KEY);

      return {
        ...state,
        followingList: clonedListForSeen,
      };

    default:
      return state;
  }
};

export default MyGithubReducer;

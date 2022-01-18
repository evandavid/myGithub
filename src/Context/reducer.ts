import {ACTION_TYPES, IMyGithubContextState, MyGithubActions} from './types';

const MyGithubReducer = (
  state: IMyGithubContextState,
  action: MyGithubActions,
): IMyGithubContextState => {
  switch (action.type) {
    case ACTION_TYPES.INITIAL_DATA:
    case ACTION_TYPES.UPDATE_SEARCH_QUERY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default MyGithubReducer;

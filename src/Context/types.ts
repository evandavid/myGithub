type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type GithubData = {
  id: string;
  name: string;
  full_name: string;
  description: string;
  updated_at: string;
  language: string;
  stargazers_count: number;
  owner: {
    avatar_url: string;
  };
};

type IMyGithubContextState = {
  searchQuery?: string;
  followingList?: GithubData[];
};

enum ACTION_TYPES {
  INITIAL_DATA = 'INITIAL_DATA',
  UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY',
}

type ProductPayload = {
  [ACTION_TYPES.INITIAL_DATA]: {
    searchQuery?: string;
    followingList?: GithubData[];
  };
  [ACTION_TYPES.UPDATE_SEARCH_QUERY]: {
    searchQuery?: string;
  };
};

type MyGithubActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export type {
  GithubData,
  IMyGithubContextState,
  ActionMap,
  ProductPayload,
  MyGithubActions,
};
export {ACTION_TYPES};

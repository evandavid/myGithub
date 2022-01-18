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

type GithubReleaseData = {
  tag_name: string;
  body: string;
  published_at: string;
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

  releases?: GithubReleaseData[];
  seen?: boolean;
};

type IMyGithubContextState = {
  searchQuery?: string;
  followingList?: GithubData[];
};

enum ACTION_TYPES {
  INITIAL_DATA = 'INITIAL_DATA',
  UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY',
  ADD_TO_LIST = 'ADD_TO_LIST',
  REMOVE_FROM_LIST = 'REMOVE_FROM_LIST',
  UPDATE_RELEASE = 'UPDATE_RELEASE',
  UPDATE_SEEN = 'UPDATE_SEEN',
}

type ProductPayload = {
  [ACTION_TYPES.INITIAL_DATA]: {
    searchQuery?: string;
    followingList?: GithubData[];
  };
  [ACTION_TYPES.UPDATE_SEARCH_QUERY]: {
    searchQuery?: string;
  };
  [ACTION_TYPES.ADD_TO_LIST]: {
    repository: GithubData;
  };
  [ACTION_TYPES.REMOVE_FROM_LIST]: {
    repository: GithubData;
  };
  [ACTION_TYPES.UPDATE_RELEASE]: {
    repository: GithubData;
    releases: GithubReleaseData[];
  };
  [ACTION_TYPES.UPDATE_SEEN]: {
    repository: GithubData;
    seen: boolean;
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
  GithubReleaseData,
};
export {ACTION_TYPES};

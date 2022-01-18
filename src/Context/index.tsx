import React, {useContext, createContext, Dispatch, useReducer} from 'react';
import myGithubReducer from './reducer';
import {IMyGithubContextState, MyGithubActions} from './types';

const MyGithubContext = createContext<{
  state: IMyGithubContextState;
  dispatch: Dispatch<MyGithubActions>;
}>({
  state: {},
  dispatch: () => null,
});

const MyGithubProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(myGithubReducer, {
    searchQuery: undefined,
    followingList: undefined,
  });

  return (
    <MyGithubContext.Provider value={{state, dispatch}}>
      {children}
    </MyGithubContext.Provider>
  );
};

const useMyGithub = () => {
  const {state, dispatch} = useContext(MyGithubContext);

  return {
    ...state,
    dispatch,
  };
};

export {MyGithubProvider, useMyGithub};

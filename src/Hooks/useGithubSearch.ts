import AxiosInstance from '@Config/Axios';

const useGithubSearch = () => {
  const searchRepository = (q: string) => {
    return AxiosInstance.get('search/repositories', {params: {q}});
  };

  return {
    searchRepository,
  };
};

export default useGithubSearch;

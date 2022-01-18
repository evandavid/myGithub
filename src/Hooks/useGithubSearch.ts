import AxiosInstance from '@Config/Axios';

const useGithubSearch = () => {
  const searchRepository = (q: string) => {
    return AxiosInstance.get('/search/repositories', {params: {q}});
  };

  const getReleases = (fullname: string) => {
    return AxiosInstance.get(`repos/${fullname}/releases`);
  };

  return {
    searchRepository,
    getReleases,
  };
};

export default useGithubSearch;

import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const orderingOptions = {
  default: {
    orderDirection: 'DESC',
    orderBy: 'CREATED_AT',
    searchKeyword: '',
  },
  highestRated: {
    orderDirection: 'DESC',
    orderBy: 'RATING_AVERAGE',
    searchKeyword: '',
  },
  lowestRated: {
    orderDirection: 'ASC',
    orderBy: 'RATING_AVERAGE',
    searchKeyword: '',
  },
};

const useRepositories = (order) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: order ? orderingOptions[order] : orderingOptions.default,
  });

  return {
    repositories: data ? data.repositories : null,
    loading,
    refetch,
  };
};

export default useRepositories;

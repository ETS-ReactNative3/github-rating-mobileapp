import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const orderingOptions = {
  default: {
    orderDirection: 'DESC',
    orderBy: 'CREATED_AT',
  },
  highestRated: {
    orderDirection: 'DESC',
    orderBy: 'RATING_AVERAGE',
  },
  lowestRated: {
    orderDirection: 'ASC',
    orderBy: 'RATING_AVERAGE',
  },
};

const useRepositories = ({ order, searchKeyword }) => {
  const { data, loading, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      ...(order ? orderingOptions[order] : orderingOptions.default),
      searchKeyword,
    },
  });

  return {
    repositories: data ? data.repositories : null,
    loading,
    ...result,
  };
};

export default useRepositories;

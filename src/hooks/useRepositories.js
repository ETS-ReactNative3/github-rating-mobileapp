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

const useRepositories = ({ order, searchKeyword, first }) => {
  var variablesObj = {
    ...(order ? orderingOptions[order] : orderingOptions.default),
    searchKeyword,
    first,
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variablesObj,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variablesObj,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [...previousResult.repositories.edges, ...fetchMoreResult.repositories.edges],
          },
        };

        return nextResult;
      },
    });
  };

  return {
    repositories: data ? data.repositories : null,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;

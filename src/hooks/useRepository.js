import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORY, {
    variables: {
      idparam: id,
    },
    fetchPolicy: 'cache-and-network',
  });

  return {
    repository: data ? data.repository : null,
    loading,
    refetch,
  };
};

export default useRepository;

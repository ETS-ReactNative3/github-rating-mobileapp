import { useQuery } from '@apollo/react-hooks';
import { GET_SIGNED_IN_USER } from '../graphql/queries';

const useSignedInUser = () => {
  const { data, loading, refetch } = useQuery(GET_SIGNED_IN_USER);

  return {
    signedInUser: data,
    loading,
    refetch,
  };
};

export default useSignedInUser;

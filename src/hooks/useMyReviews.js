import { useQuery } from '@apollo/react-hooks';
import { GET_MY_REVIEWS } from '../graphql/queries';

const useMyReviews = () => {
  const { data, loading, refetch } = useQuery(GET_MY_REVIEWS, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    reviews: data ? (data.authorizedUser ? data.authorizedUser.reviews : null) : null,
    loading,
    refetch,
  };
};

export default useMyReviews;

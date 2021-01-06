import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const argsobj = {
      variables: {
        review: {
          repositoryName,
          ownerName,
          rating: parseInt(rating),
          text,
        },
      },
    };

    return await mutate(argsobj);
  };

  return [createReview, result];
};

export default useCreateReview;

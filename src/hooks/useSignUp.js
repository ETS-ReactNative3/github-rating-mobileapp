import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const SignUp = async ({ username, password }) => {
    const argsobj = {
      variables: {
        user: {
          username,
          password,
        },
      },
    };

    return await mutate(argsobj);
  };

  return [SignUp, result];
};

export default useSignUp;

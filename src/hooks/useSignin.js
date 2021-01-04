import { useMutation } from '@apollo/react-hooks';
import { DO_AUTH } from '../graphql/mutations';

const useSignin = () => {
  const [authorize, result] = useMutation(DO_AUTH);

  const signIn = async ({ username, password }) => {
    const argsobj = {
      variables: {
        credentials: {
          username,
          password,
        },
      },
    };
    return await authorize(argsobj);
  };

  return [signIn, result];
};

export default useSignin;

import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { DO_AUTH } from '../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignin = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
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

    const res = await authorize(argsobj);
    if (res.data && res.data.authorize && res.data.authorize.accessToken) {
      await authStorage.setAccessToken(res.data.authorize.accessToken);
      apolloClient.resetStore();
    }

    return res;
  };

  return [signIn, result];
};

export default useSignin;

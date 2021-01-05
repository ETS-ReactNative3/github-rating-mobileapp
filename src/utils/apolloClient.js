import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = (authStorage) => {
  const baseUrl = Constants.manifest.extra.apolloUri;

  return new ApolloClient({
    uri: baseUrl,
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log('Retrieving authentication failed.', e);
      }
    },
  });
};

export default createApolloClient;

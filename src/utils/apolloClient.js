import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = () => {
  const baseUrl = Constants.manifest.extra.apolloUri;
  return new ApolloClient({
    uri: baseUrl,
  });
};

export default createApolloClient;

import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
  const baseUrl = 'http://192.168.1.104:5000/graphql';
  return new ApolloClient({
    uri: baseUrl,
  });
};

export default createApolloClient;

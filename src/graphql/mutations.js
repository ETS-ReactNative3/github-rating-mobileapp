import { gql } from 'apollo-boost';

export const DO_AUTH = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: "(username: $username)", password: "(password: $password)" }) {
      id
      username
    }
  }
`;

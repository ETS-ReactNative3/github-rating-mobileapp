import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_SIGNED_IN_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

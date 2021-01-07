import { gql } from 'apollo-boost';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query(
    $orderDirection: OrderDirection!
    $orderBy: AllRepositoriesOrderBy!
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryFields
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query($idparam: ID!) {
    repository(id: $idparam) {
      ...RepositoryFields
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const GET_SIGNED_IN_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

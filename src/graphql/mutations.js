import { gql } from 'apollo-boost';

export const DO_AUTH = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      user {
        username
      }
      repository {
        name
      }
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
`;

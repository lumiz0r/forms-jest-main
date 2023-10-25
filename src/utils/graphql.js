import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation Mutation(
    $username: String!
    $name: String!
    $surname: String!
    $country: String!
    $id: String!
  ) {
    createUser(
      username: $username
      name: $name
      surname: $surname
      country: $country
      id: $id
    ) {
      username
      name
      surname
      country
      id
    }
  }
`;

export const USERS_QUERY = gql`
  query Query {
    getUsers {
      country
      id
      name
      surname
      username
    }
  }
`;
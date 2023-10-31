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

export const DELETE_USER_MUTATION = gql`
  mutation Mutation($id: String) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const EDIT_USER_MUTATION = gql`
  mutation Mutation(
    $username: String
    $name: String
    $surname: String
    $country: String
    $id: String
  ) {
    editUser(
      username: $username
      name: $name
      surname: $surname
      country: $country
      id: $id
    ) {
      country
      id
      name
      surname
      username
    }
  }
`;

export const LOGIN_USER = gql`
  query Query($loginUserId: String) {
    loginUser(id: $loginUserId) {
      username
      name
      surname
      country
      id
    }
  }
`;

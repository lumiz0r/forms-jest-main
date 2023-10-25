import React from "react";
import { gql, useQuery } from "@apollo/client";

const USERS_QUERY = gql`
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

const Users = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Country</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
        {error && (
          <tr>
            <td>Error...</td>
          </tr>
        )}
        {data?.getUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.country}</td>
            <td>{user.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;

import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { USERS_QUERY, DELETE_USER_MUTATION } from "../utils/graphql";

const Users = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  const [deleteMutation] = useMutation(DELETE_USER_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  const deleteUser = (userId) => {
    deleteMutation({
      variables: {
        id: userId,
      },
    });
  };

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
            <td>
              <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;

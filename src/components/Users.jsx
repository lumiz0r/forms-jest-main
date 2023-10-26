import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { USERS_QUERY, DELETE_USER_MUTATION } from "../utils/graphql";
import User from "./User"; 

const Users = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  const [deleteMutation] = useMutation(DELETE_USER_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });


  const deleteUser = (userId) => {
    deleteMutation({
      variables: {
        id: userId,
      },
    });
  };


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
        {data?.getUsers.map((user) => (
          <User key={user.id} user={user} deleteUser={deleteUser} />
        ))}
      </tbody>
    </table>
  );
};

export default Users;

import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await api.get("/api/users");

      console.log(response.data);

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
        <User />
      </tbody>
    </table>
  );
};

export default Users;

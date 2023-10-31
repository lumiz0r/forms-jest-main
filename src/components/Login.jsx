/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { LOGIN_USER } from "../utils/graphql";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");

  const { data, loading, error } = useQuery(LOGIN_USER, {
    variables: {
        loginUserId: id,
    },
  });

  const handleLogin = () => {
    if (loading) {
        console.log("Loading");
    } else if (error) {
      console.error(error);
    } else {
      const user = data.loginUser;
      console.log(user);
      if (user) {
        onLogin(user);
      } else {
        console.log("Error");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

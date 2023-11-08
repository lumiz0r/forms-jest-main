/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");




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
      <button>Login</button>
    </div>
  );
};

export default Login;

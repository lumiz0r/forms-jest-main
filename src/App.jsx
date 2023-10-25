import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FormUserInformation from "./components/FormUserInformation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const HELLO_QUERY = gql`
  query Query {
    hello
  }
`;

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  const handleSubmit = (userInformation) => {
    setUserInfo(userInformation);
    setIsSubmitted(true);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {isSubmitted ? (
                <FormUserInformation {...userInfo} />
              ) : (
                <Form onSubmit={handleSubmit} />
              )}
              {data?.hello}
            </div>
          }
        />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

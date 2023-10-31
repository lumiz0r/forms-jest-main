import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Login from "./components/Login";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  }

  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {isSubmitted ? (
                <div>Register Successful!</div>
              ) : (
                <div>
                  <Form onSubmit={handleSubmit} />

                </div>
              )}
            </div>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

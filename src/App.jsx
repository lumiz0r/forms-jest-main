import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

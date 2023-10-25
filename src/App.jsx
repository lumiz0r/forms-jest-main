import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FormUserInformation from './components/FormUserInformation';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = (userInformation) => {
    setUserInfo(userInformation);
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? <FormUserInformation {...userInfo} /> : <Form onSubmit={handleSubmit} />}
    </div>
  );
}

export default App;

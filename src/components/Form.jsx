/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "../utils/useForm"; // Import the custom hook
import ClearButton from "./ClearButton";
import CountryInput from "./CountryInput";
import IdInput from "./IdInput";
import NameInput from "./NameInput";
import SubmitButton from "./SubmitButton";
import SurnameInput from "./SurnameInput";
import UserNameInput from "./UserNameInput";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
  const {
    name,
    surname,
    country,
    isFormValid,
    username,
    id,
    reset,
    errorMessage,
    setReset,
    setErrorMessage,
    handleClean,
    handleSurnameChange,
    handleUserNameChange,
    handleNameChange,
    handleCountryChange,
    handleIdChange,
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/api/users", 
      name,
      surname,
      country,
      username,
      id,
    )
    .then((response) => {
      console.log("User Created: ", response);
      onSubmit();
    }, (error) => {
      console.log("Error: ", error);
    })
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <NameInput onNameChange={handleNameChange} value={name} />
        <SurnameInput onSurnameChange={handleSurnameChange} value={surname} />
        <UserNameInput
          name={name}
          onUserNameChange={handleUserNameChange}
          value={username}
          reset={reset}
        />
        <CountryInput
          onCountryChange={handleCountryChange}
          onBlur={handleIdChange}
          selectedCountry={country}
        />
        <IdInput
          country={country}
          onIdChange={handleIdChange}
          value={id}
          reset={reset}
        />
        <SubmitButton
          isFormValid={isFormValid}
        />
        <ClearButton onClear={handleClean} setReset={setReset} />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Form;

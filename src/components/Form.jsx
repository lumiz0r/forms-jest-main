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
    setReset,
    handleClean,
    handleSurnameChange,
    handleUserNameChange,
    handleNameChange,
    handleCountryChange,
    handleIdChange,
  } = useForm();

  const handleSubmit = () => {
    onSubmit({ name, surname, username, country, id });
  };

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
        <IdInput country={country} onIdChange={handleIdChange} value={id} reset={reset} />
        <SubmitButton isFormValid={isFormValid} onSubmit={handleSubmit} />
        <ClearButton onClear={handleClean} setReset={setReset} />
      </form>
    </div>
  );
};

export default Form;

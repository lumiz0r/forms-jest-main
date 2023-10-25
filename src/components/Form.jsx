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
import { useMutation } from "@apollo/client";
import { USERS_QUERY, CREATE_USER_MUTATION } from "../utils/graphql";

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

  const handleSubmit = async () => {
    try {
      await createMutation({
        variables: {
          username: username,
          name: name,
          surname: surname,
          country: country,
          id: id,
        },
      });
      onSubmit();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }

  };

  const [createMutation] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });

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
          onSubmit={handleSubmit}
          onError={handleSubmit}
        />
        <ClearButton onClear={handleClean} setReset={setReset} />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Form;

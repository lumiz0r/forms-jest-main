// useForm.js
import { useEffect, useState } from "react";
import { validateUserName } from "./validateUsername";

export function useForm() {
  const [isIDValid, setIsIDValid] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [reset, setReset] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClean = () => {
    setIsIDValid(false);
    setId("");
    setName("");
    setSurname("");
    setCountry("");
    setIsFormValid(false);
    setUsername("");
    setReset(true);
    setErrorMessage("");
    setTimeout(() => setReset(false), 0);
  };

  const handleSurnameChange = (value) => {
    setSurname(value);
  };

  const handleUserNameChange = (value) => {
    setUsername(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const handleIdChange = (isValid, newId) => {
    setIsIDValid(isValid);
    setId(newId);
  };

  const handleSubmit = () => {
    setIsIDValid(true);
    return { name, surname, username, country, id };
  };

  useEffect(() => {
    const isNameValid = name !== "";
    const isSurnameValid = surname !== "";
    const isCountryValid = country !== "";
    const isUsernameValid = validateUserName(name, username)
    setIsFormValid(
      isUsernameValid && isNameValid && isSurnameValid && isCountryValid && isIDValid
    );
  }, [username, name, surname, country, isIDValid]);

  return {
    isIDValid,
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
    handleSubmit,
  };
}

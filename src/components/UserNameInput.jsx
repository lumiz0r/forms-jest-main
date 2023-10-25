/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { validateUserName } from "../utils/validateUsername";

const UserNameInput = ({ name, onUserNameChange, value, reset }) => {
  const userNameRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (reset) {
      setIsValid(true);
      setErrorMessage("");
    }
  }, [reset]);

  const handleBlur = () => {
    const value = userNameRef.current.value;
    const isValidFormat = validateUserName(name, value);

    setIsValid(isValidFormat);
    if (!isValidFormat) {
      if (value.length > 10) {
        setErrorMessage("The max length is 10 characters");
      } else if (value.includes(name)) {
        setErrorMessage("The username can't contain the name");
      } else {
        setErrorMessage("The username can't be empty");
      }
    } else {
      setErrorMessage("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const uppercaseValue = value.toUpperCase();
    onUserNameChange(uppercaseValue);
  };

  return (
    <div data-testid="username">
      <label>Username:</label>
      <input
        type="text"
        ref={userNameRef}
        onBlur={handleBlur}
        onChange={handleChange}
        className={!isValid ? "error" : ""}
        data-testid="usernameInput"
        value={value}
      />
      {!isValid && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default UserNameInput;

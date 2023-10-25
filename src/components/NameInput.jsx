/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const NameInput = ({ onNameChange, value }) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlur = () => {
    if (value === "") {
      setIsValid(false);
      setErrorMessage("The name can't be empty");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const uppercaseValue = value.toUpperCase();
    onNameChange(uppercaseValue);
  };

  return (
    <div data-testid="name">
      <label>Name:</label>
      <input
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        className={!isValid ? "error" : ""}
        data-testid="nameInput"
        value={value}
      />
      {!isValid && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default NameInput;

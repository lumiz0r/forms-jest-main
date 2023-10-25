/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { validateId } from "../utils/validateId";

const IdInput = ({ country, onIdChange, value, reset }) => {
  const id = useRef();
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (reset) {
      setIsValid(true);
      setErrorMessage("");
    }
  }, [reset]);

  const handleChange = (e) => {
    const value = e.target.value;
    const uppercaseValue = value.toUpperCase();
    const isValidFormat = validateId(uppercaseValue, country);
    setIsValid(isValidFormat);
    onIdChange(isValidFormat, uppercaseValue);
  };

  const handleBlur = () => {
    const value = id.current.value;
    const isValidFormat = validateId(value, country);

    setIsValid(isValidFormat);
    if (!isValidFormat) {
      if (value === "") {
        setErrorMessage("ID can't be empty");
      } else {
        setErrorMessage("Invalid ID format");
      }
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div data-testid="idField">
      <label>ID:</label>
      <input
        type="text"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className={!isValid ? "error" : ""}
        data-testid="idInput"
        ref={id}
      />
      {!isValid && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default IdInput;

/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SurnameInput = ({ onSurnameChange, value }) => {
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const handleBlur = () => {
        if (value === "") {
            setIsValid(false);
            setErrorMessage("The surname can't be empty");
        } else {
            setIsValid(true);
            setErrorMessage("");
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const uppercaseValue = value.toUpperCase();
        onSurnameChange(uppercaseValue);
    };

    return (
        <div data-testid="surname">
            <label>Surname:</label>
            <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                className={!isValid ? "error" : ""}
                data-testid="surnameInput"
                value={value}
            />
            {!isValid && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default SurnameInput;

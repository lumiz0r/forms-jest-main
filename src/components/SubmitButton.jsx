/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const SubmitButton = ({ isFormValid, onSubmit }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!isFormValid);
  }, [isFormValid]);

  const handleClick = () => {
    onSubmit();
  };

  return (
    <button
      data-testid="submitButton"
      onClick={handleClick}
      disabled={isDisabled}
    >
      Submit
    </button>
  );
};

export default SubmitButton;

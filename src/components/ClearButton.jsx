/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ClearButton = ({ onClear, setReset }) => {
  const handleCleanClick = () => {
    onClear();
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  return (
    <button onClick={handleCleanClick} data-testid="clearButton">
      Clear
    </button>
  );
};

export default ClearButton;

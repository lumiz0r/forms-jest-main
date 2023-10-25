/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CountryInput = ({ onCountryChange, onBlur, selectedCountry }) => {
  const handleCountryChange = (e) => {
    const value = e.target.value;
    onCountryChange(value);
    onBlur();
  };

  return (
    <div data-testid="country">
      <label>Country:</label>
      <select
        className="dropdown"
        data-testid="countryInput"
        onChange={handleCountryChange}
        value={selectedCountry}
      >
        <option disabled data-testid="optionDefault"></option>
        <option data-testid="optionSpain">Spain</option>
        <option data-testid="optionItaly">Italy</option>
      </select>
    </div>
  );
};

export default CountryInput;

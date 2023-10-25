export function validateUserName(name, input) {
    const isValidFormat = /^[A-Z]{1,10}$/.test(input);
    const upperCaseName = name.toUpperCase();
    const containsInvalidName = input.includes(upperCaseName);
  
    return isValidFormat && !containsInvalidName;
  }
  
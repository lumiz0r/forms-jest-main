/* eslint-disable react/prop-types */
import React from 'react';

const User = ({ id, username, name, surname, country }) => {
  return (
    <tr>
      <td>{username}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{country}</td>
      <td>{id}</td>
    </tr>
  );
};

export default User;

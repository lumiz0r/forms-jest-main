/* eslint-disable react/prop-types */
import React from 'react';

import { useState } from 'react';
import api from '../api/axiosConfig';

const User = ({ _id, id, username, name, surname, country, getUsers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUsername, setEditedUsername] = useState(username);
  const [editedName, setEditedName] = useState(name);
  const [editedSurname, setEditedSurname] = useState(surname);
  const [editedCountry, setEditedCountry] = useState(country);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUsername(username);
    setEditedName(name);
    setEditedSurname(surname);
    setEditedCountry(country);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await api.delete(`/api/users/delete/${_id}`);
      console.log(response);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
          />
        ) : (
          username
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedSurname}
            onChange={(e) => setEditedSurname(e.target.value)}
          />
        ) : (
          surname
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedCountry}
            onChange={(e) => setEditedCountry(e.target.value)}
          />
        ) : (
          country
        )}
      </td>
      <td>{id}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <button className='delete-button' onClick={handleDeleteClick}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default User;

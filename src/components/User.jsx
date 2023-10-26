/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { EDIT_USER_MUTATION, USERS_QUERY } from "../utils/graphql";
import { useMutation } from "@apollo/client";

const User = ({ user, deleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const [editUserMutation] = useMutation(EDIT_USER_MUTATION, {
    refetchQueries: [
        {query: USERS_QUERY},
    ],
});

  const saveChanges = () => {
    editUserMutation({
      variables: {
        id: editedUser.id,
        username: editedUser.username,
        name: editedUser.name,
        surname: editedUser.surname,
        country: editedUser.country,
      },
    });
    setIsEditing(false);
    };
  
  const discardChanges = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  }

  return (
    <tr key={user.id}>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedUser.username}
            onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
          />
        ) : (
          user.username
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedUser.surname}
            onChange={(e) => setEditedUser({ ...editedUser, surname: e.target.value })}
          />
        ) : (
          user.surname
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedUser.country}
            onChange={(e) => setEditedUser({ ...editedUser, country: e.target.value })}
          />
        ) : (
          user.country
        )}
      </td>
      <td>
      {isEditing ? (
          <input
            type="text"
            value={editedUser.id}
            onChange={(e) => setEditedUser({ ...editedUser, id: e.target.value })}
          />
        ) : (
          user.id
        )}
        </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={saveChanges}>Save</button>
            <button onClick={discardChanges}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-button" onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default User;

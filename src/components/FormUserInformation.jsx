import React from 'react';

// eslint-disable-next-line react/prop-types
const FormUserInformation = ({ name, surname, username, country, id }) => {
    return (
        <div>
            <form>
                <h2>User Information</h2>
                <p>Name: {name}</p>
                <p>Surname: {surname}</p>
                <p>Username: {username}</p>
                <p>Country: {country}</p>
                <p>ID: {id}</p>
            </form>
        </div>
    );
};

export default FormUserInformation;

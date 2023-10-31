/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Register</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/users" className="nav-link">Users</Link>
      {user && (
        <div className="user-info">Welcome, {user.username}</div>
      )}
    </nav>
  );
};

export default Navbar;

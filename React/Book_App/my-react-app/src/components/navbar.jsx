import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Book Store</h2>
      <ul>
        <li>Home</li>
        <li>News</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;

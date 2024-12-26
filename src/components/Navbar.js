// src/components/Navbar.js
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h1>BrainyBeam</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;

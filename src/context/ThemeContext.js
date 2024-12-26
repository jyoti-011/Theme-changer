// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const availableThemes = ['light', 'dark', 'solarized', 'retro'];
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme; // Add the theme class to the body
    localStorage.setItem('theme', theme); // Save theme to localStorage
  }, [theme]);

  const changeTheme = (selectedTheme) => {
    if (availableThemes.includes(selectedTheme)) {
      setTheme(selectedTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

// src/components/ThemeToggleButton.js
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, changeTheme, availableThemes } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <select
        value={theme}
        onChange={(e) => changeTheme(e.target.value)}
        className={`theme-selector ${theme}`}
      >
        {availableThemes.map((availableTheme) => (
          <option key={availableTheme} value={availableTheme}>
            {availableTheme.charAt(0).toUpperCase() + availableTheme.slice(1)} Mode
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeToggleButton;

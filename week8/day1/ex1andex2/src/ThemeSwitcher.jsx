import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ThemeSwitcher;

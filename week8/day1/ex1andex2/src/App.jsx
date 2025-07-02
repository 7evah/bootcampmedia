import React, { useContext } from 'react';
import './index.css';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import CharacterCounter from './CharacterCounter';

function ThemedContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === 'light' ? '☀ Light Mode' : '🌙 Dark Mode'}</h1>
      <ThemeSwitcher />
      <div>
      <CharacterCounter />
    </div>
    </div>
  );
}

function App() {
  return (
   
    <ThemeProvider>
      <ThemedContent />
    
    </ThemeProvider>
  
    
  );
}

export default App;

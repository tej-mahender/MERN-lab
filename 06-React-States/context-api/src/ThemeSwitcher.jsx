import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher(){
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px', width:400,
        border:'solid 5px red'}}
        >
    <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};
export default ThemeSwitcher;

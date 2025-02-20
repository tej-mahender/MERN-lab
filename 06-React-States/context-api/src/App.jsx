import React from 'react'
import { ThemeProvider } from './ThemeContext';
import  ThemeSwitcher  from './ThemeSwitcher';
import './App.css';

function App() {
  return (
    <ThemeProvider>
        <ThemeSwitcher />
    </ThemeProvider>
  );
}


export default App

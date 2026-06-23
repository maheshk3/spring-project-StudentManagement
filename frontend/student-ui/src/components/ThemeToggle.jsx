import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-pill-toggle glass-card" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

export default ThemeToggle;
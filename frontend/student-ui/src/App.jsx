import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      {/* Animated Live Background Elements */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      
      <Dashboard theme={theme} toggleTheme={toggleTheme} />
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme={theme}
        pauseOnHover
        closeOnClick
      />
    </div>
  );
}

export default App;
import './App.css';
// import Content from './Content.js';
import Home from './home.js';
import Login from './login.js';
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ? <><Home /></> : <Login onLogin={handleLogin} />}
      </BrowserRouter>
    </div>
  );
};

export default App;
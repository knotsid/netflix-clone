import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}

      </BrowserRouter>
    </div>
  );
}

export default App;

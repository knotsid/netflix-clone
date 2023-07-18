import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Banner from './components/Banner/Banner';


function App() {
  return (
    <div className="app">
      <HomeScreen />
      <Banner />
    </div>
  );
}

export default App;

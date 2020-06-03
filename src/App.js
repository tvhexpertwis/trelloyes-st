import React from 'react';
import logo from './logo.svg';
import Chatwindow from './pages/Chatwindow';

import './App.css';


// Create new file called Header.js
// Remove header from App function and put it in its own component
// Make sure you're importing and exporting correctly

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
      
      <Chatwindow />
    </div>
  );
}

export default App;

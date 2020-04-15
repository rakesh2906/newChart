import React from 'react';
import logo from './datakwip.png';
import './App.css';
import Chart from './components/Chart.js'

function App() {
  return (
    <div className=" container bg-light p-2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Chart />
      <footer className="App-footer">
        <div className="h3 App-logo bg-dark-gray"> DataKwip</div>
      </footer>
    </div>
  );
}

export default App;

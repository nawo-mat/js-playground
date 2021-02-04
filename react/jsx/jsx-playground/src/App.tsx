import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRandom from './AppRandom';

const name = 'Bill';
const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Component">
          {greet(name)}
        </div>
        
        <div className="Component">
          {AppRandom()}
        </div>
      </header>
    </div>
  );
}

export default App;

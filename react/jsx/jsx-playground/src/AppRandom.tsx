import React from 'react';
import logo from './logo.svg';
import './App.css';

const n =Math.floor(Math.random() * 10);
const threshold = 5;

function AppRandom() {
  return (
    <div>
      {n > threshold && <p>'n' is larger than {threshold}</p>}
      <p>'n' is {n % 2 === 0 ? 'even' : 'odd'}</p>
      <p>'n' = {n.toString()}</p>
    </div>
  );
}

export default AppRandom;
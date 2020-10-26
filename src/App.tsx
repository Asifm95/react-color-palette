import React from 'react';
import './App.css';
import Palette from './Palette';
import { seedColors } from './model/seedColors';

function App() {
  return (
    // <div className="App">
    <Palette {...seedColors[0]} />
    // </div>
  );
}

export default App;

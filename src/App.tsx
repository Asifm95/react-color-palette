import React from 'react';
import './App.css';
import Palette from './Palette';
import { seedColors } from './model/seedColors';
import generatePalette from './utils/colorGenerator';

function App() {
  return (
    // <div className="App">
    <Palette {...generatePalette(seedColors[0])} />
    // </div>
  );
}

export default App;

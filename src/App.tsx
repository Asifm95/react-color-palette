import React from 'react';
import './App.css';
import Palette from './Palette';
import { Switch, Route } from 'react-router-dom';
import PaletteList from './PaletteList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PaletteList} />
      <Route exact path="/palette/:id" component={Palette} />
    </Switch>
  );
}

export default App;

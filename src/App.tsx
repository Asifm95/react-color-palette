import React from 'react';
import './App.css';
import Palette from './containers/Palette';
import { Switch, Route } from 'react-router-dom';
import PaletteList from './containers/PaletteList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PaletteList} />
      <Route exact path="/palette/:id" component={Palette} />
    </Switch>
  );
}

export default App;

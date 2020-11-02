import React from 'react';
import './App.css';
import Palette from './containers/Palette';
import { Switch, Route } from 'react-router-dom';
import PaletteList from './containers/PaletteList';
import SingleColorPalette from './containers/SingleColorPalette';
import NewPaletteForm from './containers/NewPaletteForm';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PaletteList} />
      <Route exact path="/palette/new" component={NewPaletteForm} />
      <Route exact path="/palette/:id" component={Palette} />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        component={SingleColorPalette}
      />
    </Switch>
  );
}

export default App;

import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import MiniPalette from '../components/MiniPalette';
import { seedColors } from '../model/seedColors';
import useStyles from '../styles/PaletteListStyles';

const PaletteList: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const classes = useStyles();
  const paletteClickHandler = (id: string) => history.push(`/palette/${id}`);

  const list = seedColors.map((color) => (
    <MiniPalette paletteClick={paletteClickHandler} {...color} />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palette}>{list}</div>
      </div>
    </div>
  );
};

export default PaletteList;

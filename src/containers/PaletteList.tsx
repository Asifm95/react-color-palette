import Button from '@material-ui/core/Button';
import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import MiniPalette from '../components/MiniPalette';
import { seedColors } from '../model/seedColors';
import useStyles from '../styles/PaletteListStyles';
import AddIcon from '@material-ui/icons/Add';

const PaletteList: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const classes = useStyles();
  const paletteClickHandler = (id: string) => history.push(`/palette/${id}`);

  const list = seedColors.map((color) => (
    <MiniPalette key={color.id} paletteClick={paletteClickHandler} {...color} />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          {/* <Link to="/palette/new"> */}
          <Button variant="outlined" color="default" startIcon={<AddIcon />}>
            new palette
          </Button>
          {/* </Link> */}
        </nav>
        <div className={classes.palette}>{list}</div>
      </div>
    </div>
  );
};

export default PaletteList;

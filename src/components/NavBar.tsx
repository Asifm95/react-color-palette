import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import useStyles, { PrettoSlider } from '../styles/NavBarStyles';

const NavBar: React.FC<{
  level?: number;
  format: string;
  sliderChange?: (event: object, value: number | number[]) => false | void;
  formatChange?: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
}> = ({ level, sliderChange, format, formatChange }) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <Link to="/">ReactColorPicker</Link>
      </div>
      {level && (
        <div className={classes.sliderContainer}>
          <span id="discrete-slider">Level: {level}</span>
          <div className={classes.slider}>
            <PrettoSlider
              defaultValue={500}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="off"
              step={100}
              min={100}
              max={900}
              track={false}
              onChange={sliderChange}
            />
          </div>
        </div>
      )}
      <div className={classes.select}>
        <Select id="format-select" value={format} onChange={formatChange}>
          <MenuItem value={'hex'}>HEX - #ffff</MenuItem>
          <MenuItem value={'rgb'}>RGB - rgb(255,255,255)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default NavBar;

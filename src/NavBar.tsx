import React from 'react';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './NavBar.css';

const PrettoSlider = withStyles({
  root: {
    color: '#cecece',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#52af77',
    border: '2px solid #52af77',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const NavBar: React.FC<{
  level: number;
  sliderChange: (event: object, value: number | number[]) => false | void;
}> = ({ level, sliderChange }) => {
  return (
    <header className="Navbar-container">
      <div className="Navbar-logo">
        <a href="#">ReactColorPicker</a>
      </div>
      <div className="Slider-container">
        <span id="discrete-slider">Level: {level}</span>
        <div className="Palette-slider">
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
    </header>
  );
};

export default NavBar;

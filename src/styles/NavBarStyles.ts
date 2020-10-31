import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
export default makeStyles({
  root: {
    display: 'flex',
    height: '6%',
    alignItems: 'center',
  },
  logo: {
    background: '#cecece',
    height: '100%',
    marginRight: '1rem',
    fontSize: '1.5rem',
    padding: '0 0.7em',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    color: 'white',
    textTransform: 'lowercase',
    letterSpacing: '-1px',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      fontFamily: 'monospace',
      fontWeight: 500,
    },
  },
  slider: {
    display: 'inline-flex',
    width: 340,
    margin: '0 0.7rem',
  },
  select: {
    marginLeft: 'auto',
    marginRight: '1rem',
    minWidth: '3rem',
  },
});

export const PrettoSlider = withStyles({
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

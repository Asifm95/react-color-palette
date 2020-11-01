import { Theme, makeStyles } from '@material-ui/core/styles';
import { ColorBoxType } from '../components/ColorBox';
import chroma from 'chroma-js';

export default makeStyles<Theme, ColorBoxType>({
  root: {
    width: '20%',
    height: (props) => (props.singleMode ? '50%' : '25%'),
    position: 'relative',
    textTransform: 'uppercase',
    '&:hover button': {
      opacity: 1,
      transition: '0.4s',
    },
  },
  copyOverlay: {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    overflow: 'hidden',
    zIndex: 0,
  },
  showOverlay: {
    transform: 'scale(50)',
    opacity: 1,
    zIndex: 10,
  },
  overlayText: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '3rem',
    color: ({ color, format }) =>
      chroma(color[format]).luminance() >= 0.5 ? 'black' : 'white',
    transform: 'scale(0)',
    transition: 'transform 0.2s ease-in-out',
    transitionDelay: '0.2s',
    opacity: 0,
    '& h1': {
      width: '100%',
      fontWeight: 400,
      margin: '0.2rem',
      background: 'rgba(255, 255, 255, 0.4)',
      textAlign: 'center',
    },
    '& p': {
      fontSize: '2rem',
      textAlign: 'center',
    },
  },
  showOverlayText: {
    transform: 'scale(1)',
    opacity: 1,
    zIndex: 10,
  },
  boxContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontSize: '0.75rem',
    padding: '0.83em',
    fontWeight: 500,
    letterSpacing: 1,
    color: ({ color, format }) =>
      chroma(color[format]).luminance() >= 0.5 ? 'black' : 'white',
  },
  copyButton: {
    position: 'absolute',
    fontSize: 13,
    width: '7.69em',
    height: '2.69em',
    letterSpacing: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    color: ({ color, format }) =>
      chroma(color[format]).luminance() >= 0.5 ? 'black' : 'white',
    textTransform: 'uppercase',
    opacity: 0,
    cursor: 'pointer',
  },
  moreButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: '0.8rem',
    width: '5em',
    height: '2.5em',
    background: 'rgba(255, 255, 255, 0.3)',
    letterSpacing: 0.3,
    color: ({ color, format }) =>
      chroma(color[format]).luminance() >= 0.5 ? 'black' : 'white',
    textAlign: 'center',
    lineHeight: '2.5em',
  },
});

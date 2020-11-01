import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    height: '100vh',
    overflow: 'hidden',
  },
  paletteColors: {
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  back: {
    width: '20%',
    background: '#474444',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const BackButton = withStyles({
  root: {
    padding: '5px 30px',
  },
})(Button);

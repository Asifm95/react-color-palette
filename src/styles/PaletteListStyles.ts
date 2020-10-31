import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    background: '#3F51B5;',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      overflowY: 'scroll',
    },
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('lg')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
    },
  },
  heading: {
    fontSize: '2rem',
  },
  colors: {},
  title: {},
  palette: {
    display: 'grid',
    gridTemplateColumns: `repeat(3, minmax(30%, 1fr))`,
    gridGap: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: `repeat(2, minmax(30%, auto))`,
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: `repeat(1, minmax(30%, auto))`,
    },
  },
}));

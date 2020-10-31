import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '160px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplate: 'repeat(4, 25%) / repeat(5, 20%)',
  },
  box: {
    width: '100%',
    height: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    fontWeight: 500,
    position: 'relative',
    textDecoration: 'none',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
});

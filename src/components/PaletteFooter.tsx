import React from 'react';
import useStyles from '../styles/PaletteFooterStyles';

type PaletteFooterProps = {
  name: string;
  emoji: string;
};
const PaletteFooter = ({ name, emoji }: PaletteFooterProps) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      {name}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;

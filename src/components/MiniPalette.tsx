import React from 'react';
import { PalleteType } from '../model/interface';
import useStyles from '../styles/MiniPaletteStyles';

const MiniPalette: React.FC<
  PalleteType & { paletteClick: (id: string) => void }
> = ({ paletteName, colors, emoji, id, paletteClick }) => {
  const handleClick = () => paletteClick(id);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.colors} onClick={handleClick}>
        {colors.map((c) => (
          <div style={{ background: c.color }} className={classes.box}></div>
        ))}
      </div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
};

export default MiniPalette;

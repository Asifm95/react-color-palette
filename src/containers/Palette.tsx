import React, { useState } from 'react';
import ColorBox from '../components/ColorBox';
import { ColorPalette } from '../model/interface';
import NavBar from '../components/NavBar';
import { seedColors } from '../model/seedColors';
import { RouteComponentProps } from 'react-router-dom';
import generatePalette, { findPalette } from '../utils/paletteHelper';
import SnackBar from '../components/SnackBar';
import PaletteFooter from '../components/PaletteFooter';
import useStyles from '../styles/PaletteStyles';
import useSnackBar from '../hooks/useSnackBar';
type TParams = { id: string };

const Palette: React.FC<RouteComponentProps<TParams>> = ({
  match,
  history,
}) => {
  const classes = useStyles();
  const palette = findPalette(seedColors, match.params.id);
  let genPalette: ColorPalette | undefined;
  if (palette) genPalette = generatePalette(palette);

  const [level, setLevel] = useState<number>(500);
  const onSliderChange = (event: object, value: number | number[]) =>
    typeof value === 'number' && setLevel(value);

  const [format, setFormat] = useState('hex');
  const onFormatChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormat(event.target.value as string);
    setTimeout(() => setOpen(true));
  };

  const [open, setOpen, handleClose] = useSnackBar(false);

  const colorBoxes =
    genPalette &&
    genPalette.colors[level].map((color, i) => (
      <ColorBox
        key={color.id}
        paletteId={genPalette?.id as string}
        format={format}
        color={color}
        singleMode={false}
      />
    ));
  return (
    <>
      {genPalette ? (
        <div className={classes.palette}>
          <NavBar
            level={level}
            format={format}
            sliderChange={onSliderChange}
            formatChange={onFormatChange}
          />
          <div className={classes.paletteColors}>{colorBoxes}</div>
          <PaletteFooter
            name={genPalette.paletteName}
            emoji={genPalette.emoji}
          />
        </div>
      ) : (
        <h1>NOT FOUND!!!</h1>
      )}
      <SnackBar message="Format changed" open={open} onClose={handleClose} />
    </>
  );
};

export default Palette;

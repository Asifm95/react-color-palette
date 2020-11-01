import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ColorBox from '../components/ColorBox';
import NavBar from '../components/NavBar';
import { ColorPalette, GeneratedColor, PalleteType } from '../model/interface';
import { seedColors } from '../model/seedColors';
import generatePalette, { findPalette } from '../utils/paletteHelper';
import useStyles, { BackButton } from '../styles/SinglePaletteColorStyles';
import PaletteFooter from '../components/PaletteFooter';
import useSnackBar from '../hooks/useSnackBar';
import SnackBar from '../components/SnackBar';

type TParams = {
  paletteId: string;
  colorId: string;
};

const generateShades = (palette: ColorPalette, colorId: string) =>
  Object.keys(palette.colors)
    .map((key) => palette.colors[key].find((c) => c.id === colorId))
    .slice(1) as GeneratedColor[];

const SingleColorPalette: React.FC<RouteComponentProps<TParams>> = ({
  match,
  history,
}) => {
  const classes = useStyles();
  const palette = findPalette(
    seedColors,
    match.params.paletteId
  ) as PalleteType;

  const [format, setFormat] = useState('hex');
  const onFormatChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormat(event.target.value as string);
    setTimeout(() => setOpen(true));
  };

  const [open, setOpen, handleClose] = useSnackBar(false);

  if (palette) {
    const genPalette = generatePalette(palette) as ColorPalette;
    const colorShades = generateShades(genPalette, match.params.colorId);

    return (
      <div className={classes.root}>
        <NavBar format={format} formatChange={onFormatChange} />
        <div className={classes.paletteColors}>
          {colorShades &&
            colorShades.map((color, id) => (
              <ColorBox
                key={id}
                singleMode={true}
                paletteId={genPalette?.id as string}
                format={format}
                color={color}
              />
            ))}
          <div className={classes.back}>
            <BackButton
              variant="outlined"
              size="medium"
              onClick={() => history.goBack()}
            >
              back
            </BackButton>
          </div>
        </div>
        <PaletteFooter name={genPalette.paletteName} emoji={genPalette.emoji} />
        <SnackBar message="Format changed" open={open} onClose={handleClose} />
      </div>
    );
  } else {
    return <div>not found!</div>;
  }
};

export default SingleColorPalette;

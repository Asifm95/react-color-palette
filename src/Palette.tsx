import React, { useState } from 'react';
import ColorBox from './ColorBox';
import { ColorPalette } from './model/interface';
import NavBar from './NavBar';
import './Palette.css';

const Palette: React.FC<ColorPalette> = ({ ...props }) => {
  const [level, setLevel] = useState<number>(500);
  const onSliderChange = (event: object, value: number | number[]) =>
    typeof value === 'number' && setLevel(value);

  const [format, setFormat] = React.useState('hex');

  const onFormatChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormat(event.target.value as string);
  };
  const colorBoxes = props.colors[level].map((color, i) => (
    <ColorBox key={i} format={format} color={color} />
  ));
  return (
    <div className="Palette">
      <NavBar
        level={level}
        format={format}
        sliderChange={onSliderChange}
        formatChange={onFormatChange}
      />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;

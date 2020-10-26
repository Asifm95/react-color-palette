import React from 'react';
import ColorBox from './ColorBox';
import { PalleteType } from './model/interface';
import './Palette.css';

const Palette: React.FC<PalleteType> = ({ ...props }) => {
  const colorBoxes = props.colors.map((color, i) => (
    <ColorBox key={i} {...color} />
  ));
  return (
    <div className="Palette">
      {/* <h5>{props.paletteName}</h5> */}
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;

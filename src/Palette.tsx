import React from 'react';
import { PalleteType } from './model/interface';

const Palette: React.FC<PalleteType> = ({ ...props }) => {
  return (
    <div>
      <h1>
        {props.paletteName} {props.emoji}
      </h1>
    </div>
  );
};

export default Palette;

import React from 'react';
import { Color } from './model/interface';
import './ColorBox.css';

const ColorBox: React.FC<Color> = ({ name, color }) => {
  return (
    <div style={{ background: color }} className="Colorbox">
      <div className="Copy-container">
        <div className="Box-content">
          <span>{name}</span>
        </div>
        <button className="Copy-button">copy</button>
      </div>
      <div className="More-button">MORE</div>
    </div>
  );
};

export default ColorBox;

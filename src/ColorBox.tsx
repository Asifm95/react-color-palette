import React, { useState } from 'react';
import { Color } from './model/interface';
import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';

const ColorBox: React.FC<Color> = ({ name, color }) => {
  const [copied, setCopied] = useState(false);

  const onCopyToClipBoard = (text: string, result: boolean) => {
    setCopied(result);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <CopyToClipboard text={color} onCopy={onCopyToClipBoard}>
      <div style={{ background: color }} className="Colorbox">
        <div
          style={{ background: color }}
          className={`Copy-overlay ${copied && 'show'}`}
        />
        <div className={`Copy-overlay-text ${copied && 'show'}`}>
          <h1>copied!!</h1>
          <p>{color}</p>
        </div>
        <div className="Copy-container">
          <div className="Box-content">
            <span>{name}</span>
          </div>
          <button className="Copy-button">copy</button>
        </div>
        <div className="More-button">more</div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;

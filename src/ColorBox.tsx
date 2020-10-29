import React, { useState } from 'react';
import { GeneratedColor } from './model/interface';
import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';

type ColorBoxType = {
  color: GeneratedColor;
  format: string;
};

const ColorBox: React.FC<ColorBoxType> = ({ color, format }) => {
  const [copied, setCopied] = useState(false);

  const onCopyToClipBoard = (text: string, result: boolean) => {
    setCopied(result);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <CopyToClipboard text={color.hex} onCopy={onCopyToClipBoard}>
      <div style={{ background: color[format] }} className="Colorbox">
        <div
          style={{ background: color[format] }}
          className={`Copy-overlay ${copied && 'show'}`}
        />
        <div className={`Copy-overlay-text ${copied && 'show'}`}>
          <h1>copied!!</h1>
          <p>{color[format]}</p>
        </div>
        <div className="Copy-container">
          <div className="Box-content">
            <span>{color.name}</span>
          </div>
          <button className="Copy-button">copy</button>
        </div>
        <div className="More-button">more</div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;

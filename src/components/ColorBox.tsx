import React, { useState } from 'react';
import { GeneratedColor } from '../model/interface';
import useStyles from '../styles/ColorBoxStyles';
// import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import classnames from 'classnames';

type ColorBoxType = {
  color: GeneratedColor;
  format: string;
};

const ColorBox: React.FC<ColorBoxType> = ({ color, format }) => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);

  const onCopyToClipBoard = (text: string, result: boolean) => {
    setCopied(result);
    setTimeout(() => setCopied(false), 1500);
  };

  const copyOverlay = (
    <>
      <div
        style={{ background: color[format] }}
        className={classnames(classes.copyOverlay, {
          [classes.showOverlay]: copied,
        })}
      />
      <div
        className={classnames(classes.overlayText, {
          [classes.showOverlayText]: copied,
        })}
      >
        <h1>copied!!</h1>
        <p>{color[format]}</p>
      </div>
    </>
  );
  return (
    <CopyToClipboard text={color.hex} onCopy={onCopyToClipBoard}>
      <div style={{ background: color[format] }} className={classes.root}>
        {copyOverlay}
        <div>
          <span className={classes.boxContent}>{color.name}</span>
          <button className={classes.copyButton}>copy</button>
          <div className={classes.moreButton}>more</div>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;

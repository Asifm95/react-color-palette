import React, { useState } from 'react';
import { GeneratedColor } from '../model/interface';
import useStyles from '../styles/ColorBoxStyles';
import CopyToClipboard from 'react-copy-to-clipboard';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export type ColorBoxType = {
  paletteId: string;
  color: GeneratedColor;
  format: string;
  singleMode: boolean;
};

const ColorBox: React.FC<ColorBoxType> = (props) => {
  const classes = useStyles(props);
  const { paletteId, color, format, singleMode = false } = props;
  const [copied, setCopied] = useState(false);

  const onCopyToClipBoard = (text: string, result: boolean) => {
    setCopied(result);
    setTimeout(() => setCopied(false), 1500);
  };

  const moreClickHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.stopPropagation();
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
          <Link
            to={`/palette/${paletteId}/${color.id}`}
            onClick={moreClickHandler}
          >
            {!singleMode && <div className={classes.moreButton}>more</div>}
          </Link>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;

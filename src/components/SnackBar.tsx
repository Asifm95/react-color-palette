import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

type SnackBarProps = {
  message: string;
  open: boolean;
  onClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string | undefined
  ) => void;
};

const SnackBar: React.FC<SnackBarProps> = ({ message, open, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default SnackBar;

import { useState } from 'react';

const useSnackBar = (initalState = false) => {
  const [state, setState] = useState(initalState);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    // if (reason === 'clickaway') {
    // }
    setState(false);
  };
  return [state, setState, handleClose] as const;
};

export default useSnackBar;

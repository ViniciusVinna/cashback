import { useState } from 'react';

export const useDialog = (initialMode = false) => {
  const [dialogOpen, setDialogOpen] = useState(initialMode);

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  return [dialogOpen, setDialogOpen, toggleDialog];
};

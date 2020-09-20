import { useState } from 'react';

/**
 * Drawer status custom hook
 * @param {boolean} initialMode
 */

export const useDrawer = (initialMode = false) => {
  const [drawerOpen, setDrawerOpen] = useState(initialMode);

  const toggle = () => setDrawerOpen(!drawerOpen);

  return [drawerOpen, setDrawerOpen, toggle];
};

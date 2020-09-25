import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import { getViewportSize } from 'modules/viewport';

import { setScreenSize } from 'actions';

/**
 * Updates the global store screenSize after a debounced resize event
 */
export const useWindowSize = () => {
  const dispatch = useDispatch();
  const isClient = typeof window === 'object';

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      dispatch(setScreenSize(getViewportSize()));
    }

    window.addEventListener('resize', debounce(handleResize, 300));
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

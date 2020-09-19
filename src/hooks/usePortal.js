/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';

/**
 * @param {string} id
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
const createRootElement = (id) => {
  const rootContainer = document.createElement('div');

  rootContainer.setAttribute('id', id);

  return rootContainer;
};

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
const addRootElement = (rootElem) => {
  document.body.insertBefore(rootElem,
    document.body.lastElementChild.nextElementSibling);
};

/**
 * Hook to create a React Portal.
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
export const usePortal = (id) => {
  const rootElemRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  };

  return getRootElem();
};

/**
 * Get current screen width and returns the correspondent design token
 * @returns {string}
 */
export const getViewportSize = () => {
  const screenWidth = window.innerWidth;
  let screenSize;

  if (screenWidth < 768) {
    screenSize = 'small';
  }
  else if (screenWidth >= 768 && screenWidth <= 1024) {
    screenSize = 'medium';
  }
  else if (screenWidth > 1024 && screenWidth <= 1280) {
    screenSize = 'large';
  }
  else if (screenWidth > 1280 && screenWidth <= 1440) {
    screenSize = 'x-large';
  }
  if (screenWidth > 1440) {
    screenSize = 'xx-large';
  }

  return screenSize;
};

/**
 * Creates an object with an mirrored key / values
 * @param {object} obj
 * @returns {object} {}
 */
export const keymirror = (obj) => {
  const mirrored = {};
  let key;

  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('Keymirror(...): Argument must be an object.');
  }

  for (key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      mirrored[key] = key;
    }
  }

  return mirrored;
};

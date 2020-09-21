/**
 * Strips all non-digit characters of the given string
 * @param {string} value
 * @returns {string}
 */

export const clearNumber = (value) => value.replace(/\D+/g, '');

/**
 * Format the value as CPF
 * @param {string} value
 * @returns {string|null|*}
 */
export const formatCPF = (value) => {
  if (value) {
    const clearValue = clearNumber(value);

    if (clearValue.length >= 10) {
      return `${clearValue.slice(0, 3)}.${clearValue.slice(3, 6)}.${clearValue.slice(6, 9)}-${clearValue.slice(9, 11)}`;
    }
    else if (clearValue.length >= 7) {
      return `${clearValue.slice(0, 3)}.${clearValue.slice(3, 6)}.${clearValue.slice(6, 9)}`;
    }
    else if (clearValue.length >= 4) {
      return `${clearValue.slice(0, 3)}.${clearValue.slice(3, 6)}`;
    }

    return clearValue;
  }

  return null;
};

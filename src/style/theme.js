/**
 * ===============================
 * Colors palette tokens
 * Based on Grupo Boticário's brand
 * ===============================
 */

const black = '#100F10';

const blues = {
  b100: '#59ade1',
  b200: '#3d94c9',
  b300: '#3188be',
  b400: '#228dcd',
  b500: '#3388FF',
};

const greens = {
  g100: '#d7df21',
  g200: '#c4d82d',
  g300: '#9bcb3b',
  g400: '#7dc242',
  g500: '#52b947',
};

const neutrals = {
  n100: '#ffffff',
  n200: '#FAFBFC',
  n300: '#f5f8fa',
  n400: '#e1e3e6',
  n500: '#52b947',
};

const oranges = {
  o100: '#f7941d',
  o200: '#f58023',
  o300: '#f36e26',
  o400: '#f15a28',
  o500: '#f15a2a',
};

const reds = {
  r100: '#F4CBCB',
  r200: '#EDA2A2',
  r300: '#EA7A7A',
  r400: '#EA7A7A',
  r500: '#DB4D4D',
};

const semanticColors = {
  danger: reds.r500,
  success: greens.g500,
  warning: oranges.o500,
};

const applicationColors = {
  bodyBg: neutrals.n200,
  bodyColor: black,
  shadow: 'rgba(12, 15, 20, 0.07)',
};

/**
 * ===============================
 * Space tokens
 * ===============================
 */

const spacings = {
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '20px',
  xl: '28px',
  xxl: '36px',
  xxxl: '48px',
  xxxxl: '72px',
};

/**
 * ===============================
 * Icon size tokens
 * ===============================
*/

const iconSizes = {
  xxs: '10px',
  xs: '16px',
  s: '20px',
  m: '24px',
  l: '30px',
  xl: '36px',
  xxl: '48px',
  xxxl: '72px',
};

/**
 * ===============================
 * Border size tokens
 * ===============================
*/

const borderSizes = {
  s: '1px',
  m: '2px',
  l: '4px',
};

/**
 * ===============================
 * Z-index tokens
 * ===============================
*/
const zIndex = {
  deep: '-999999',
  default: '1',
  masked: '100',
  mask: '200',
  sticky: '300',
  header: '400',
  toast: '500',
  dropdown: '600',
  overlay: '700',
  spinner: '800',
  modal: '900',
  popup: '950',
};

/**
 * ===============================
 * Line height tokens
 * ===============================
 */

const lineHeight = {
  xs: '1.1em',
  s: '1.25em',
  m: '1.5',
};

/**
 * ===============================
 * Light theme
 * ===============================
*/

const light = {
  borderSize: { ...borderSizes },
  colors: {
    ...applicationColors,
    ...blues,
    ...greens,
    ...neutrals,
    ...oranges,
    ...reds,
    ...semanticColors,
  },
  iconSize: { ...iconSizes },
  lineHeight: { ...lineHeight },
  space: { ...spacings },
  zIndex: { ...zIndex },
};

export { light };

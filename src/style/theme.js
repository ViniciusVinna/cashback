/**
 * ===============================
 * Colors palette tokens
 * Based on Grupo Boticário's brand
 * ===============================
 */

const black = {
  black: '#100F10',
};

const blues = {
  b100: '#b9e4ff',
  b200: '#3d94c9',
  b300: '#3188be',
  b400: '#228dcd',
  b500: '#3388FF',
};

const greens = {
  g100: '#d7df21',
  g200: '#c4d82d',
  g300: '#80c83a',
  g400: '#7dc242',
  g500: '#52b947',
};

const neutrals = {
  n100: '#ffffff',
  n200: '#FAFBFC',
  n300: '#f5f8fa',
  n400: '#e1e3e6',
  n500: '#cfd2d4',
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

const darkColors = {
  d100: '#f5f8fa',
  d200: '#e1e3e6',
  d300: '#cfd2d4',
  d400: '#909599',
  d500: '#657787',
};

const semanticColors = {
  danger: reds.r500,
  success: greens.g500,
  warning: oranges.o500,
};

const applicationColors = {
  primary: blues.b500,
  secondary: greens.g400,
  bodyBg: neutrals.n200,
  bodyColor: black,
  shadow: 'rgba(12, 15, 20, 0.5)',
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
 * Border Radius tokens
 * ===============================
*/

const borderRadius = {
  s: '4px',
  m: '8px',
  l: '12px',
  xl: '72px',
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
  drawer: '750',
  spinner: '800',
  modal: '900',
  popup: '100',
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
 * Font Weight tokens
 * ===============================
 */

const fontWeight = {
  s: '400',
  m: '600',
  l: '800',
};

/**
 * ===============================
 * Font size text tokens
 * ===============================
*/

const fontSizes = {
  xxs: '0.6rem',
  xs: '0.75rem',
  s: '0.875rem',
  m: '1rem',
  l: '1.25rem',
  xl: '1.5rem',
  xxl: '2.25rem',
  xxxl: '3rem',
  xxxxl: '4.5rem',
};

/**
 * ===============================
 * Box shadow tokens
 * ===============================
*/

const boxShadows = {
  tooltip: '0 2px 10px 0 rgba(0, 41, 77, 0.07)',
  hover: '0 2px 10px 0 rgba(0, 41, 77, 0.1)',
  modal: '0 2px 20px 0 rgba(0, 0, 0, 0.2)',
  default: '0 2px 6px 0 rgba(0, 41, 77, 0.07)',
  card: '0 2px 6px 0 rgba(0, 41, 77, 0.07), 0 -1px 0 0 rgba(0, 0, 0, 0.09), -1px 0 0 0 rgba(0, 0, 0, 0.07), 1px 0 0 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07)',
};

const transitions = {
  bezier: 'all cubic-bezier(0.4, 0.0, 0.2, 1) 0.3s',
};

/**
 * ===============================
 * Font shadow tokens
 * ===============================
*/

const font = {
  heading: '"Raleway", sans-serif',
  headingSpacing: '-0.01rem',
  headingWeight: '600',
  text: '"Open Sans", sans-serif',
};

/**
 * ===============================
 * Light theme
 * ===============================
*/

const light = {
  borderRadius: { ...borderRadius },
  borderSize: { ...borderSizes },
  boxShadow: { ...boxShadows },
  color: {
    ...applicationColors,
    ...black,
    ...blues,
    ...darkColors,
    ...greens,
    ...neutrals,
    ...oranges,
    ...reds,
    ...semanticColors,
  },
  font: { ...font },
  fontWeight: { ...fontWeight },
  iconSize: { ...iconSizes },
  lineHeight: { ...lineHeight },
  space: { ...spacings },
  textSize: { ...fontSizes },
  transition: { ...transitions },
  zIndex: { ...zIndex },
};

export { light };
